import React from 'react'
import { Container } from './styled/Container.styled';
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Ageresult,
  Attribution,
  AttributionA,
  Buttonarrow,
  Hstack,
  InputDate,
  InputMonth,
  InputYear,
  Line,
  Separator,
  StyledAgecalc,
  Styledform,
  Vstack} from './styled/Agecalc.styled';
import arrow from './assets/images/icon-arrow.svg';

export const AgeCalculator = () => {
  const [age, setAge] = React.useState({});

  const formik = useFormik({
    initialValues: {
      year: '',
      month: '',
      day: '',
    },

    validationSchema: Yup.object({
      year: Yup.number()
        .min(new Date().getFullYear() - 1923, 'Must be more recent')
        .max(new Date().getFullYear(), 'Must be in the past')
        .required('This field is required'),
      month: Yup.number()
        .min(1, 'Must be a valid month')
        .max(12, 'Must be a valid month')
        .required('This field is required')
        .integer('Must be a valid month'),
      day: Yup.number()
        .min(1, 'Must be a valid day')
        .required('This field is required')
        .integer('Must be a valid day')
        .test("isValidDay", "Must be a valid day", function (value) {
          const { month, year } = this.parent;
          if (!month || !year) {
            return true;
          }
          const daysInMonth = new Date(year, month, 0).getDate();
          return value > 0 && value <= daysInMonth;
        }),
    }),
    onSubmit: values => {
      setAge(values);
  },
});

  const birthDate = new Date(age.year, age.month - 1, age.day);
  const today = new Date();

  const diffTime = Math.abs(today.getTime() - birthDate.getTime());
  const diffYears = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365));
  const diffMonths = Math.floor(
    (diffTime % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30)
  );
  const diffDays = Math.floor(
    (diffTime % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)
  );

  return (
    <Container>
      <StyledAgecalc>
        <Styledform onSubmit={formik.handleSubmit}>
          <Vstack>
            <label
              htmlFor="day"
              style={formik.errors.day && formik.touched.day && {
                color: "var(--Light-red)",
              }}
            >
              Day
            </label>
            <InputDate
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.day}
              style={formik.errors.day && formik.touched.day && {
                color: "var(--Light-red)",
              }}
            />
              {formik.touched.day && formik.errors.day ?
              (<p className='errornotif'><em>{formik.errors.day}</em></p>) : null}
          </Vstack>
          <Vstack>
            <label
              htmlFor="month"
              style={formik.errors.month && formik.touched.month && {
                color: "var(--Light-red)",
              }}
            >
              Month
            </label>
            <InputMonth
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.month}
              style={formik.errors.month && formik.touched.month && {
                color: "var(--Light-red)",
              }}
            />
              {formik.touched.month && formik.errors.month ?
              (<p className='errornotif'><em>{formik.errors.month}</em></p>) : null}
          </Vstack>
          <Vstack>
            <label
              htmlFor="year"
              style={formik.errors.year && formik.touched.year && {
                color: "var(--Light-red)",
              }}
            >
              Year
            </label>
            <InputYear
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.year}
              style={formik.errors.year && formik.touched.year && {
                color: "var(--Light-red)",
              }}
            />
            {formik.touched.year && formik.errors.year ?
            (<p className='errornotif'><em>{formik.errors.year}</em></p>) : null}
          </Vstack>
          <Separator>
            <Line/>
            <Buttonarrow type='submit'>
                <img src={arrow} alt='arrow'/>
            </Buttonarrow>
          </Separator>
        </Styledform>
        <Ageresult>
          <Hstack>
            <span>
              {!age.year && <i>- -</i>}
              {age.year && <i>{diffYears}</i>}
            </span>
            <p><i>years</i></p>
          </Hstack>
          <Hstack>
            <span>
              {!age.month && <i>- -</i>}
              {age.month && <i>{diffMonths}</i>}
            </span>
            <p><i>months</i></p>
          </Hstack>
          <Hstack>
            <span>
              {!age.day && <i>- -</i>}
              {age.day && <i>{diffDays}</i>}
            </span>
            <p><i>days</i></p>
          </Hstack>
        </Ageresult>
      </StyledAgecalc>
      <footer>
        <Attribution>
          <AttributionA>
              <p>Challenge by<a href="https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q/hub" rel="noreferrer" target="_blank">&nbsp;Frontend Mentor | Age Calculator App.</a></p>
          </AttributionA>
          <AttributionA>
              <p>&nbsp;&nbsp;Coded by <a href="https://www.linkedin.com/in/rikiwendri/">&nbsp;Riki Wendri</a></p>
          </AttributionA>
        </Attribution>
      </footer>
    </Container>
    )
  }

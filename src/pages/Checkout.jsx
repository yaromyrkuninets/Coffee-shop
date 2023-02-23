import { useSelector } from "react-redux";
import { Formik, Form, useField } from 'formik';
import * as Yup from "yup";
import { toast } from 'react-toastify';

import '../styles/checkout.scss';

const Checkout = () => {

    const totalAmount = useSelector(state => state.coffees.totalAmount);
    const totalQty = useSelector(state => state.coffees.totalQuantity);

    const MyTextInput = ({label, ...props}) => {
        const [field, meta] = useField(props)
    
        return (
            <>
                <label htmlFor={props.name}>{label}</label> 
                <input {...props} {...field}/>
                {meta.touched && meta.error ? (
                        <div className='error'>{meta.error}</div>
                ) : null}
            </>
        )
    };

    const msg = () => {
        if (totalQty == 0) {
            toast.error('Please add product to the cart');
        } else {
            toast.success('The order has been shipped');
        }
    }

    return (
        <>
            <section className='bgc'>
                <h2 className='bgc__title'>Checkout</h2>
            </section>
                <Formik
                    initialValues = {{
                        name: '',
                        email: '',
                        number: '',
                        street: '',
                        city: '',
                        code: '',
                        country: ''
                    }}
                    validationSchema = {Yup.object({
                        name: Yup.string()
                                .min(2, 'Мінімум 2 символи!')
                                .required('Обов`язкове поле!'),
                        email: Yup.string()
                                .email('Неправильний email адрес')
                                .required('Обов`язкове поле!'),
                        number: Yup.number()
                                    .min(10, 'Не менше 10 символів')
                                    .required('Обов`язкове поле!'),
                        street: Yup.string()
                                    .required('Обов`язкове поле!'),   
                        city: Yup.string()
                                    .required('Обов`язкове поле!'),
                        code: Yup.number()
                                    .min(5, 'Не менше 5')
                                    .required('Обов`язкове поле!'),
                        country: Yup.string()
                                    .required('Обов`язкове поле!'), 
                        
                    })}
                    onSubmit={msg}
                    // onSubmit = {values => console.log(JSON.stringify(values, null, 2))}
                >
                    <Form className="form">
                        <div className="input__wrapper">
                            <MyTextInput 
                                label="Enter your name"
                                id="name"
                                name="name"
                                type="text"
                            />
                            <MyTextInput
                                label="Enter your email" 
                                id="email"
                                name="email"
                                type="email"   
                            />
                            <MyTextInput
                                label="Phone number" 
                                id="number"
                                name="number"
                                type="number"   
                            />
                            <MyTextInput
                                label="Street address" 
                                id="street"
                                name="street"
                                type="text"   
                            />
                            <MyTextInput
                                label="City" 
                                id="city"
                                name="city"
                                type="text"   
                            />
                            <MyTextInput
                                label="Postal code" 
                                id="code"
                                name="code"
                                type="number"   
                            />
                            <MyTextInput
                                label="Country" 
                                id="country"
                                name="country"
                                type="text"   
                            />
                        </div>

                    <div className="checkout">
                        <div className="checkout__wrapper">
                            <div>Total Qty: 
                                <span>{totalQty} items</span>
                            </div>
                            <div>Subtotal: 
                                <span>${totalAmount}</span>
                            </div>
                            <div>Shipping:
                                <span>$0</span>
                            </div>
                            <div>Total cost: 
                                <span>${totalAmount}</span>
                            </div>
                            <button type='submit'  className="buy__btn-w-150">
                                Place an order
                            </button>
                        </div>
                    </div>
                    </Form>
                </Formik>
        </>
    )
}

export default Checkout;
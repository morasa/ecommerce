import React, { Fragment, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/types/rootStoreType';
import { useFormik } from 'formik';
import { Address } from '../../store/types/addressType';
import { updateUser } from '../../store/actions/userActions';
import { useDispatch } from 'react-redux';
type Props = {};

const AddressForm: React.FC<Props> = () => {
    const shippingAddress = useSelector((state: RootState) => state.user);
    const [editForm, setEditForm] = useState(true);
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            addressLineOne: shippingAddress?.addressLineOne,
            addressLineTwo: shippingAddress?.addressLineTwo,
            city: shippingAddress?.city,
            state: shippingAddress?.state,
            country: shippingAddress?.country
        },
        onSubmit: (values: Address) => {
            setEditForm(state => !state);
            dispatch(updateUser(values));
        },
    });

    function handleEdit(){
        setEditForm(false);
    }

    return (
        <Fragment>
            <form onSubmit={formik.handleSubmit}>
                <div className="cart-input-continer">
                    <div className="div_input_conatiner">
                        <input
                            id="addressLineOne"
                            name="addressLineOne"
                            type="text"
                            placeholder="Address line 1"
                            disabled={editForm}
                            onChange={formik.handleChange}
                            value={formik.values.addressLineOne}
                        />
                    </div>
                    <div className="div_input_conatiner">
                        <input
                            id="addressLineTwo"
                            name="addressLineTwo"
                            type="text"
                            placeholder="Address line 2"
                            disabled={editForm}
                            onChange={formik.handleChange}
                            value={formik.values.addressLineTwo}
                        />
                    </div>
                    <div className="div_input_conatiner">
                        <select placeholder="city"
                            id="city"
                            name="city"
                            onChange={formik.handleChange}
                            value={formik.values.city}
                            disabled={editForm}>
                            <option value=""> Select City </option>
                            <option value="Hyderabad"> Hyderabad </option>
                            <option value="Vijayawada"> Vijayawada </option>
                        </select>
                    </div>
                    <div className="div_input_conatiner">
                        <select placeholder="State"
                            id="state"
                            name="state"
                            onChange={formik.handleChange}
                            value={formik.values.state}
                            disabled={editForm}>
                            <option value=""> Select State </option>
                            <option value="Telangana">Telangana</option>
                            <option value="Andhra Pradesh">Andhra Pradesh</option>
                        </select>
                    </div>
                    <div className="div_input_conatiner">
                        <select placeholder="Country"
                            id="country"
                            name="country"
                            onChange={formik.handleChange}
                            value={formik.values.country}
                            disabled={editForm}>
                            <option value=""> Select Country </option>
                            <option value="India">India</option>
                        </select>
                    </div>
                </div>
                <div className="cart-buttonsContainer">
                    <button type="submit" disabled={editForm}>Save Address</button>
                    <button type="button" onClick={handleEdit}>Edit Address</button>
                </div>
            </form>
        </Fragment>
    )
}

export default AddressForm
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    const { getByText } = render (<CheckoutForm />);
    getByText(/Checkout Form/i);
});

test("form shows success message on submit with form details", () => {
    const { getByLabelText, findAllByText, getByTestId } = render(<CheckoutForm />)

    fireEvent.change(getByTestId('first'), {target: {value: 'Joshua' }});
    fireEvent.change(getByTestId('last'), {target: {value: 'Schmidt' }});
    fireEvent.change(getByTestId('address'), {target: {value: 'Davlind Dr' }});
    fireEvent.change(getByTestId('city'), {target: {value: 'Holt' }});
    fireEvent.change(getByTestId('state'), {target: {value: 'Michigan' }});
    fireEvent.change(getByTestId('zipcode'), {target: {value: '48842' }});

    const checkoutButton = getByTestId('button');
    fireEvent.click(checkoutButton);
    findAllByText(/Joshua/i);
    expect(getByTestId('successMessage')).toBeInTheDocument();
});

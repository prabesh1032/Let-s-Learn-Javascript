const orderDetails = {
    orderId: 12345,
    orderItems: ['Pizza', 'Pasta', 'Salad'],
    totalAmount: 29.99,
    customerName: 'ram',
    customerLocation: 'Nepal'
};

function placeOrder(orderDetails) {

    console.log("Order Placed by " + orderDetails.customerName + ". Getting the order details...");
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            if (!orderDetails.customerName) {
                return reject(new Error("Invalid order details")); //if customerName is missing, reject the promise it will stop further execution
            }
            console.log("Order details received. Preparing the order...of totle amount $" + orderDetails
                .totalAmount);
            return resolve(orderDetails);
        }, 3000);
    });
}

function prepareOrder(orderDetails) {
    console.log("Order is being prepared. Please wait..." + orderDetails.customerName);
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log("Order prepared. Getting the payment details...");
            return resolve(orderDetails);
        }, 3000);
    });
}

function pickUpOrder(orderDetails) {
    console.log("Order is ready for pickup at " + orderDetails.customerLocation +
        ". Please collect your order.");
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log("Order picked up. Enjoy your meal!");
            return resolve(orderDetails);

        }, 3000);
    });
}

function completeOrder(orderDetails) {
    console.log("Order(" + orderDetails.orderId + ") is complete. Thank you " + orderDetails.customerName +
        " for dining with us!");
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log("We hope to see you again soon!");
            return resolve(orderDetails);
        }, 3000);
    });
}

async function ordering() {
    try {
    const response1 = await placeOrder(orderDetails);
    const response2 = await prepareOrder(response1);
    const response3 = await pickUpOrder(response2);
    const response4 = await completeOrder(response3);
    console.log(response4)
    } catch (error) {
        console.log("Error processing order: " + error.message);
    }
} 

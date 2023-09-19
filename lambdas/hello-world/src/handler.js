export const hello = (event, context, callback) => {

    console.log("event = ", JSON.stringify(event));
    console.log("context = ", context);

    const message = "Hello World";

    console.log(message);

    callback(null, message);
};

import { hello } from "../handler.js";

describe('Handler', () => {
    it('should run handler successfully', () => {
        const expectedMessage = "Hello World";
        const callback = jest.fn((err, message) => message);

        hello("event", null, callback);

        expect(callback).toBeCalledWith(null, expectedMessage);
    });
});

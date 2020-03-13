describe("My FizzBuzz function", function(){
// A test suite begins with a call to the global Jasmine function describe with two parameters: a string and a function.

beforeEach(function() {
    fizzbuzz = new fizzBuzz();
});

    describe("Returns number, fizz, buzz or fizzbuzz", function(){

        // Specs are defined by calling the global Jasmine function it
        it("should exist", function() {
            // Expectations are built with the function expect which takes a value, called the actual.
            // Each matcher implements a boolean comparison between the actual value and the expected value.
            // Any matcher can evaluate to a negative assertion by chaining the call to expect with a not before calling the matcher.
            expect(fizzBuzz).toBeDefined();
        });

        it("should return 'FizzBuzz", function(){
            expect(fizzBuzz(15)).toBe("FizzBuzz");
        });
        it("should return 'Fizz", function(){
            expect(fizzBuzz(6)).toBe("Fizz");
        });
        it("should return 'Buzz", function(){
            expect(fizzBuzz(10)).toBe("Buzz");
        });
        it("should return 2 when called as fizzBuzz(2)", function() {
            expect(fizzBuzz(2)).toBe(2);
        });

        it("should be unable to return an answer when called with a string", function(){
            expect(fizzBuzz("Hi")).toBe("Sorry, numerical values only");
        });
    });


});
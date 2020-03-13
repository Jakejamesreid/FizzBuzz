describe("My FizzBuzz function", function(){


    describe("Checks FizzBuzz", function(){
        it("should return 'FizzBuzz", function(){
            expect(fizzBuzz(15)).toBe("FizzBuzz");
        });
        it("should return 'Fizz", function(){
            expect(fizzBuzz(6)).toBe("Fizz");
        });
        it("should return 'Buzz", function(){
            expect(fizzBuzz(10)).toBe("Buzz");
        });
    });


});
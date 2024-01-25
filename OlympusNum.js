(function (globalScope) {
   "use strict";

    class Ordinal {
        static Ord(v) {
            return new Ordinal(v);
        }

        constructor(v) {
            // An ordinal is represented as either 0 or ψ_n(b)+c where b, c are other ordinals and n is an integer.
            // The former is type zero, with this.type = 0, this.parts = [].
            // The latter is type one, with this.type = 1, this.parts = [[n,b]] + c.parts.
            
            if (v == null) {
                this.type = 0;
                this.parts = [];
            } else if (v instanceof Ordinal) {
                this.type = v.type;
                this.parts = v.parts;
            } else if (typeof v == "string") {
                // Valid strings are either 0 or p_n(b)+c. We match these via RegEx.
                const pattern2 = /p\_\d+\(\d*\)/;
                const pattern1 = /p\_\d+\(\d*\)\+\d*/;
                if (v == "0") {
                    this.type = 0;
                    this.parts = [];
                } else if (pattern1.test(v) || pattern2.test(v)) {} else {
                    throw new Error("Invalid string to convert.");
                }
            }
        }
    }

    class Olympus {
        static Oly(v) {
            return new Olympus(v);
        }

        constructor(v) {
            if (v == null) {
                this.ord = Ordinal.Ord(0);
            } else if (v instanceof Ordinal) {
                // Deep clone the original ordinal object so modifying this Olympus instance doesn't affect the Ordinal instance
                this.ord = _.cloneDeep(v);
            } else if (v instanceof Olympus) {
                this.ord = _.cloneDeep(v);
            } else if (typeof v == "string") {
                // Numbers are formatted as mantissa-exponent, e.g. 1e10, 1ee3, 3e5.
                // g_w^n(10) = 10^n, g_w^w(10) = 10^10, etc. So we first check how many e's there are, etc.
                let parts = v.split("e")
            } else if (typeof v == "number") {
                // Same mechanism as before, but no need for checking e's in the string, just considering log(n).
            } else {
                this.ord = Ordinal.Ord(0);
            }
        }
    }
})(this);
(function (globalScope) {
   "use strict";

    class Ordinal {
        static Ord(v) {
            return new Ordinal(v);
        }

        constructor(v) {
            if (v == null) {
                // Type 0 = zero, Type 1 = sum, Type 2 = additively principal.
                // Parts is empty for types 0 and 2, represents the individual terms in the sum for type 1.
                // Index is null for types 0 and 1, represents the index of the psi-function for type 2.
                // Input is null for types 0 and 1, represents the input to the psi-function for type 2.
                this.type = 0;
                this.parts = [];
                this.index = null;
                this.input = null;
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
(function (globalScope) {
   "use strict";

    class Ordinal {
        static Ord(v) {
            return new Ordinal(v);
        }

        constructor(v) {
            // An ordinal is represented as either 0, type 0, or ψ_n(α)*k+β, type 1.
            // n, k are stored as bigints.
            if (v == null) {
                this.type = 0;
                this.sub = null;
                this.arg = null;
                this.coef = null;
                this.add = null;
            }
            else if (v instanceof Ordinal){
                // Shallow or deep clone all the attributes of v.
                this.type = v.type;
                this.sub = v.sub;
                this.arg = structuredClone(v.arg);
                this.coef = v.coef;
                this.add = structuredClone(v.add);
            }
            else if (typeof(v) == "bigint") {
                if (v == 0n) {
                    this.type = 0;
                    this.sub = null;
                    this.arg = null;
                    this.coef = null;
                    this.add = null;
                }
                else {
                    // 1 = ψ_0(0), and generally n = ψ_0(0)*n.
                    this.type = 1;
                    this.sub = 0n;
                    this.arg = Ordinal.Ord(0);
                    this.coef = v;
                    this.add = Ordinal.Ord(0);
                }
            }
            else if (typeof(v) == "number") {
                this = Ordinal.Ord(BigInt(v));
            }
            else if (typeof(v) == "string") {
                // Numbers are formatted as mantissa-exponent, e.g. 1e10, 1ee3, 3e5.
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

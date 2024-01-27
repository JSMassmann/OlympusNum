const Ord = Ordinal.Ord;
(function (globalScope) {
   "use strict";

    class Ordinal {
        static Ord(v) {
            return new Ordinal(v);
        }

        constructor(v) {
            // An ordinal is represented as either 0, or ψ_n(α)*k+β. n, k are stored as bigints.
           if(v==null) {
              this.type = 0;
           }
           else if (v instanceof Ordinal){
              this.type = _.cloneDeep(v.type);
              this.sub = _.cloneDeep(v.sub);
              this.arg = _.cloneDeep(v.arg);
              this.coef = _.cloneDeep(v.coef);
              this.add = _.cloneDeep(v.add);
           }
           else if (typeof(v)=='bigint'){
              if(v==0n){this.type=0;}
              else{
                 this.type=1;
                 this.sub=0n; // should this be changed? Should we go up to EBO?
                 this.arg=Ord();
                 this.coef=v;
                 this.add=Ord();
              }
           }
           else if (typeof(v)=='number'){
              this=Ord(BigInt(v));
           }
           else if (typeof(v)=='string'){
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

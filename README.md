# OlympusNum
The JavaScript large number library to rule them all. The limit is g_ψ_0(Ω_9007199254740991)(10) with respect to Buchholz's function.

# Mechanism

Numbers are stored via the <code>Olympus</code> class, being represented in the slow-growing hierarchy out of the intermediate <code>Ordinal</code> class. Namely, an ordinal is represented in its Buchholz normal form, and g_a(10) is represented as a, plus a fractional part. Both classes comes with arithmetic, comparison, etc: the only reason they're implemented as separate classes is because, even though they have the same instances, they differ in methods.

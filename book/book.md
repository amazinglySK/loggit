# Logarithms Explained

## **Getting Started**

Right as you enter into your higher secondary, you're faced with a new challenge. Values get weirder and you find it amusing (and frustrating) how you don't find a single common factor between the numbers. And in CBSE, where calculators don’t belong in a bag, you might end up feeling a bit lost. This is where logarithms come in to save the day.

Being handed a matrix of random sequence of numbers, you're now bamboozled. Let's try breakdown what logarithms are, its uses and at the end let's see if you'll be able to appreciate it's functionality.

## **Why Logs ?**

As discussed in the previous section, calculations are hard to do by hand. Long decimals are often difficult to divide by other long numbers by hand. You'd be expending more energy and time into calculating rather than understanding core concepts and theory in the subjects. This is where log (short for logarithm) simplifies your work exponentially. But do note: logs won't give you instant results. It’s a method which you get better at with more practice. Thus, practicing and implementing is key.

## **Basics of Logs**

Logs are essentially operations using powers of numbers with a fixed base. It's a function which when fed with a number and a base returns the power to which it's raised.

For example, $\log_{7}(49) = 2$.

So mathematically, $\log_{b}(b^c) = c$

Seems simple enough, doesn’t it? If you come across a log function in writing without a base, it's assumed by convention that the base is 10 (in computer science it maybe 2 since we generally work with binaries in CS).

## The Identities

Logarithmic identities are many but here we’ll focus on a few important ones which we’ll be using frequently. These identities are similar to the radical (exponents) identities that you’ve learnt in the previous classes

$$
\log_{b}(x.y) = \log_{b}(x) + \log_{b}(y)\\
\log_{b}{\frac{x}{y}} = \log_{b}(x) - \log_{b}(y)\\
\log_{b}{x^d} = d\log_{b}(x)
$$

Now, if those look like weird hieroglyphs to you, don’t worry. Over time, you’ll have these identities at the tip of your tongue.

## Getting the Log Values

Now that you’ve seen the identities, let’s try making use of those dreadful (and apparently meaningful) numbers. Keep on copy of the [table](https://www.pdfslist.com/wp-content/uploads/2022/06/log-antilog-tablespdf_compress-1.pdf) beside you so that you can follow along.

To get the logarithm of a value say 42.333:

1. Count the number of digits before the decimal point and subtract one. This is your characteristic. So, in the example it would be 1.
2. Now omit the decimal point for a moment in your mind. Take the first four digits and write it in rough. [4233]
3. Now head to the log table and check for the first two digits (42) on the left-most column.
4. Once you find the correct row (42nd row), check for the column with 3 in the first row.
5. See the cell which belongs to this row and column. Jot down that number. [= 6263]
6. Now in case there is a fourth digit (as is in our example), head over to the mean difference values (last 9 columns) of the table. Locate the digit (3) in the top row. Find the number that falls in the same row (42nd row) and column (3) [= 3]
7. Add the number to the 4 digits obtained in step 5. [6263 + 3 = 6266]
8. Put a decimal point and write down the final result obtained in step 7. Before the decimal point write the characteristic obtained in step 1. [1.6266]

Voila ! You have successfully used the log tables !

## A Few Workarounds

1. The number you may start with not necessarily have the decimal point i.e. it is a whole number. In that case consider the decimal point to be at the end and follow the steps accordingly.
2. In case it is a number starting with 0. then multiply by $10^{-x}$ where x is the number of place you move to obtain the result. Keep that power outside the logarithm for convenience.
3. Don’t freak out if you have a number say, 3; 3 is equivalent to 3.0 so the two digits which you’ll search for in the first column would be 30 and the value in the row adjacent to it (under 0) would give you that answer !

## Operating with them

As you may have seen in the identities section, you can operate on numbers with logs! It just boils down to addition or subtraction ! So let’s take look on how to do this. We’ll continue with 42.33×32.1 and 42.33÷32.1. The log value of 42.33 is 1.6266 and 32.1 is 1.5065 (try it yourself).

1. As seen in the identities section, when you take log of something multiplied by or divided by something you add or subtract respectively.
2. Here too add or subtract the values. So if it was multiplication it would be 1.6266+1.5065 = 3.1331 and for division it would be 1.6266-1.5065 = 0.1201.
3. This is your final log value.

But as you may see this is not an answer is it? How could the answer be so small. Well you’re right. For obtaining the final answer we’ll have to uncover what antilogarithm or simply antilog is.

## Antilogarithms

Antilog is, well, as the name suggests the opposite of log. Once you obtain a result using logs, you need to convert it back into the decimal system. Mathematically, antilog look like this :

$antilog_{b}(x)= b^x$

Scroll down to the antilogarithms table in the document provided.

## Getting the Antilog Values

If you’ve understood how to locate the log values, this process is pretty straightforward. We’ll continue with our example 3.1331 (for multiplication) and 0.1201 (for division)

1. Omit the decimal and the number before it (3 and 0 here. These are the characteristics)
2. Take the antilog table and just follow the same steps as we did for finding logs. [1358, 1318]
3. Once you obtain a four digit answer take the characteristic and add one to it. Place the decimal point after those many digits from the left [1358, 1.318]

Well, if you now use a calculator and see for yourself, these values are near accurate. But always remember, log tables have a maximum resolution of 4 digits. Precision varies with the characteristic.

## One More Thing.

Often times when you calculate the log values you get negative values. Now wait a second there. Do not directly use the antilog table for it.

1. Subtract one to the part before the decimal. So if it’s -6 it would become -7.
2. Add one to the part after decimal. So if it’s **-**0.2345 (don’t forget to take that negative sign) it would become 1-0.2345 = 0.7655
3. So in this case we obtain -7.7655 (in writing don’t put that negative sign rather write it as a bar on top of 7)
4. Now find the antilog in the antilog table for that number.
5. Once you find the answer in the log table, write it down and put the decimal one digit after the number. Then multiply the answer with $10^{-x}$ where x is the characteristic.

## Congratulations 🎉

That’s it! You’ve made it. You have successfully made your life a bit easier! Don’t be discouraged or overwhelmed if none of this made sense to you. Take it slow and go through each of the sections once again. For more practice and detail on logs and antilogs, we recommend you check out Unit 1 of [Applied Math handbook by NCERT](https://cbseacademic.nic.in/web_material/Curriculum21/publication/srsec/840_APPLIED_MATHS-XI.pdf). Now going forward try applying these rules and follow the steps to get your answers in class.

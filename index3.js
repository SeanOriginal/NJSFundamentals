// Question 3

//Which of the following console.log messages will print? Why?
if (0) console.log('#1 zero is true')
if ("0") console.log('#2 zero is true')
if (null) console.log('null is true')
if (-1) console.log('negative is true')
if (1) console.log('positive is true')

// line 4 will NOT print because 0 is an empty value
// line 5 will print because "0" is a string
// line 6 will NOT print because it is a non existing object
// line 7 will print because -1 is a non-zero number, making it true
// line 8 will print because 1 is a non-zero number also, making it true
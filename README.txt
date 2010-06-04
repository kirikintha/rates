##Summary

The "rates" module creates a CCK widget named "Rates Field" that allows you to make a CCK field for use in your content types.

You can then use this CCK field in your regular display, or use views to create any type of output you wish using the views theme system.

You can also use the rate_dispaly.tpl.php to add in any necessary extra information, or use a _preprocess hook to change variables, add custom logic, etc.

This module was built with the intention to be a starting point for developers to have a more intuitive interface that normalizes to CCK standards, which is probably what you are using on your content types anyways.

##Road Map (To Do's)

1. Add in a _table formatter that automatically handles a Rate Table Output so you don't have to mess about with Views themeing to get the desired result.

2. Add in better views support? Not quite sure what else I can do… any suggestions are welcomed!
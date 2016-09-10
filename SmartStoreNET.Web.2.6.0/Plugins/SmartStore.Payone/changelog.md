#Release Notes

##Payone 2.5.0.1
###Bugfixes
* Hash string incorrect for frontend API payments where the order has more than 9 products

###Improvements
* Redirect by POST rather than GET for frontend API payments
* Transmit localized product name

##Payone 2.2.0.4
###New Features
* More online bank transfer types: eps (Austria), PostFinance E-Finance and PostFinance Card (Switzerland), iDEAL (the Netherlands)

##Payone 2.2.0.3
###Improvements
* Redirecting to payment provider performed by core instead of plugin

##Payone 2.2.0.2
###Bugfixes
* Send currency code of primary store currency (not of working currency) to payment gateway

##Payone 2.2.0.1
###New Features
* Supports order list label for new incoming IPNs

##Payone 1.31
###Improvements
* User friendly message during checkout when the payment provider rejects the payment
* Changed user friendly provider name for Klarna
* Payment fees transmitted as a separate item detail

##Payone 1.3
###Improvements
* CC-Check via client API, not via Server API (requires PCI certification)
* Automatic 3D Secure redirect after ordering, not manually via complete payment button

##Payone 1.24
###Bugfixes
* Fixed rounding issue with order item tax

##Payone 1.23
###Improvements
* Not for error messages where contacting Payone is recommended

##Payone 1.22
###Bugfixes
* EU vat setting unregarded

##Payone 1.21
###Improvements
* Secure IPN handling (IP check)

##Payone 1.2
### New Features
* Financing BillSAFE payment provider
* Financing Klarna payment provider
* Cash on delivery payment provider
* SEPA direct mandate for direct debit payment
###Bugfixes
* German Umlaute were not encoded correctly using server API
* Error message "Sequence no incorrect (907)"
* Checkout complete redirection info not displayed in mobile version


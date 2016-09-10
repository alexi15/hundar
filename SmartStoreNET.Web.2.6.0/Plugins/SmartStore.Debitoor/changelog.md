#Release Notes#

##Debitoor 2.2.0.4
###Improvements
* Customer VAT number not transmitted anymore because it appears on the Debitoor invoice.

##Debitoor 2.2.0.3
###Bugfixes
* Fixed "The property named 'lines.0.productOrService' should be defined" again. Was only partially solved with 1.15.
* Send currency code of primary store currency (not of working currency)


##Debitoor 2.2.0.1
###New Features
* Extend option "Book invoice if paid" to also (optionally) mail the invoice as a PDF
###Bugfixes
* Mark as paid did not work anymore due to API changes. Added new documented method: /paymentaccounts/payments. Removed old undocumented method: /cashtransactions/payments/invoice.

 
##Debitoor 1.18##
###Bugfixes###
* Fixed "The property rate with the value x is malformed" caused by rounding issue


##Debitoor 1.17##
###Improvements###
* Failure counter to avoid unnecessary API calls on failures
###Bugfixes###
* Adding order notes can result in infinite order update event loop with thousands of order notes


##Debitoor 1.16##
###Bugfixes###
* Fixed "The property rate with the value x is malformed" when creating products

##Debitoor 1.15##
###Bugfixes###
* Fixed "The property named 'lines.0.productOrService' should be defined"


##Debitoor 1.14##
###New Features###
* Updated to new versioned api endpoints.
* Option to synchronize differences in order total calculation by adding an invoice detail with difference amount.
* Attribute description without html numeric codes.


##Debitoor 1.13##
###Improvements###
* Improved configuration.


##Debitoor 1.1##
###New Features###
* Updated logo and icons
* Option to automatically update data at Debitoor if the order data has changed.
###Bugfixes###
* Upsert of customer record: "property":"number","message":"string value found, but a number is required".


##Debitoor 1.0##
###New Features###
* Automatically create a draft invoice if an order has been placed.
* Option to automatically book invoices and mark them as paid (if the related order has been paid).
* Option to add customers at Debitoor.
* Option to add products at Debitoor.
* Order note hyperlink to manually update data at Debitoor for a single order.
* Reverse paid: Button to retrieve invoices marked as paid at Debitoor and then mark the corresponding shop order as paid.


##Beschreibung##
Das Debitoor-Plugin ermöglicht den direkten Datenaustausch mit Debitoor, dem kostenlosen Rechnungs- & Buchhaltungsprogramm.
Bei Eingang eines neuen Auftrags wird automatisch ein Rechnungsentwurf bei Debitoor erstellt. Wird der Auftrag bezahlt, so
kann die zugehörige Rechnung optional gebucht und als bezahlt markiert werden.

Über Auftragsnotizen können Sie jederzeit verfolgen, ob und welche Daten an Debitoor gesendet wurden. Eine erstellte Rechnung
ist dabei verlinkt, d.h. mit einem Klick gelangen Sie auf die Debitoor-Bearbeitungsseite, um sie z.B. zu verschicken.
Über einen weiteren Link besteht die Möglichkeit, die Daten zu einem Auftrag nachträglich und beliebig oft an Debitoor zu senden
(aktualisieren).

Das Plugin kann, sofern gewünscht, automatisch Kunden und Produkte bei Debitoor anlegen. Dadurch können Sie leichter und
schneller Rechnungen und Angebote erstellen, ohne deren Details neu eingeben zu müssen.

Auch der umgekehrte Datenaustausch ist möglich. Markieren Sie eine Rechnung bei Debitoor als bezahlt, so lässt sich dieser
Status auf Knopfdruck auch auf den zugehörigen Shop-Auftrag übertragen.
project-namer
=============
The company I was working for had a habit of giving super-sekrit codenames to projects. I was just commenting to a cow-orker about projects LaserWolf and SlimePig when I was made aware of the new project ThunderPony. I decided I should build a tool to help them with this process.

Current version can be viewed at http://codenames.clivemurray.com/

NOTE
----
I was aware of the very similar site http://codenames.sergiogarcez.com/ at the time, but I found some of the options there a bit clumsy and clunky, so wanted to make my own. I have not ripped off any of the code from that site, just the idea.

TODO
====
* All names take the form PrefixAnimal. The prefixes and animals are stored in JSON files, and each item is described with attributes. The next version will have a dropdown which will let the user select/deselect attribute groups from the available options.
* Maybe themes or something... @dotcode certainly reckoned it looked ugly
* Change the JS from Object Literal format to Revealing Module Pattern, mainly for practice
* Add more attribute groups

# Building Brainiacs

Building Brainiacs is a New York based literacy tutoring company.

This site was created with Gatsby as a port of the original PHP site found at https://github.com/wsoeltz/building-brainiacs

The content of this site is copyright © 2020 Building Brainiacs LLC. All rights reserved.

The code for this site is licensed under [Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0)](https://creativecommons.org/licenses/by-nc-sa/4.0/).

## Updating Content

  - [Overview](#overview)
  - [Editing a JSON File](#editingajsonfile)
  - [metaTitle and metaDescription](#metadata)
  - [HTML in the JSON](#htmlinjson)
  - [Updating Specialists](#updatingspecialists)
  - [Updating Testimonials](#updatingtestimonials)

<a name="overview"/>

### **Overview**

All of the _text content_ for the site can be found in [`src/content`](src/content). Each file is named according to the page that is associated with it, i.e. `specialists.json` contains all of the copy found on the **Specialists** page. Additionally, there is a file called `general.json` that includes the text for the navigation and the footer.

The text is stored in **JSON** format, which is a fast and simple data format that makes developing the site easy and updating the content straightforward once you understand the basics of how to format a JSON file.

<a name="editingajsonfile"/>

### **Editing a JSON File**

A JSON file contains a number of _keys_, each with their own _values_, separated by commas.

Each _value_ can be some text, a number, `true` or `false`, the special value `null`, or a list of more of those values.

Some sample JSON looks like this:

```js
{
  "key_1": "Value for key 1",
  "key_2": "Value for key 2",
  "another_key": null,
  "one_last_key": true
}
```

Looking at that sample, you'll notice a couple of things:

- The entire JSON document MUST be wrapped in a pair of squiggly brackets `{}`
- Each `key` MUST be wrapped in double quotes `""`
- A `key` can be anything you want as long it starts with a letter and does not contain any spaces
- Each `value` that contains text MUST be wrapped in double quotes `""`
- Any `value` that IS NOT text should NOT be wrapped in double quotes (this goes for `null`, `true`, `false`, or any number)
- Each line _EXCEPT_ for the last line MUST end in a comma

Generally speaking for the site, you should not have to worry about most of that. The `keys` have all been setup already, so all that might need to be updated is the `values`, which are almost all text.

To update a file:

1. first go to [`src/content`](src/content) and the click on the one you would like to update.
1. In the right hand corner of the file, you should see a pencil icon (next to a computer icon and a trash icon). Click this and you will be in edit mode.
1. Go ahead and make your changes, making sure to follow the above guidelines.
1. Once you are done, scroll down and click **Commit Changes** (Keep any options you see as-is)

This will now create a new build of the site with the changes. One of the best parts about this workflow is that **you don't need to be afraid to make mistakes!** If _anything_ went wrong in the format of the JSON, it will throw an error, the site will stay how it was before the attempted update, and I will receive an email stating there was a problem so I can go and fix it ;)

<a name="metadata"/>

### **metaTitle and metaDescription**

In each JSON file, you will see two fields at the top `metaTitle` and `metaDescription`.

These are the fields the control what shows up on search results, social media shares, and in the browser tab for your site.

<a name="htmlinjson"/>

### **HTML in the JSON**

In a handful of instances, you will see a `key` that is called `htmlContent` or includes `__HTML` at the end. These indicate that the text will be rendered as HTML on the page, which means it can accept any HTML tag to allow for more complex layouts than simple text would allow. When writing an HTML tag, the start must look something like this - `<p>` and end like this - `</p>`. All of the content should sit within those two tags.

For the purpose of this site, the only tags you may need are the following:

```html
<p>This indicates a paragraph</p>
<strong>Use this if you want to BOLD the text</strong>
<em>Text between these will be italicized</em>
```

**An important note about writing HTML in JSON:** When writing HTML in JSON (or any text for that matter), you must not break the text onto more than one line. The text can naturally wrap to additional lines (when editing, you can set the option to wrap the text in the upper right of the edit field for easier reading), but do not hit _return_/_enter_ to manually break onto a new line. This is invalid JSON and will throw an error.

<a name="updatingspecialists"/>

### **Updating Specialists**

The first step to adding a specialist is to add their picture. The pictures for all of the specialists should go in [`src/images/specialists/`](src/images/specialists). From there, in the top right just above the list of files, you'll see a button that says "Upload files". Click this and you can upload an image to the directory.

The image must be a square **240 pixels by 240 pixels**. If you don't have any software to perform the crop, there are number of online free image croppers that can be found with a quick Google Search. The image does not have to be a circle, so long as it is a square the code will automatically put it into a circle.

Once the image is updated, navigate to [`src/content/specialists.json`](src/content/specialists.json) and hit *edit*. In this JSON file, you will find a `key` called `data`. Unlike the other JSON values already talked about, `data` is a list of JSON values and it looks like this:

```js
{
  data: [
    {
      "name": "David D.",
      "type": "Math Specialist",
      "school": "Graduate of Hunter College​",
      "image": "david-b.png"
    },
    {
      "name": "Bill K.",
      "type": "Literacy Specialist",
      "school": "Graduate of NYU",
      "image": "bill-k.png"
    }
  ]
}
```

The important things to note about the formatting of this list are:

- The list starts and ends with square brackets `[]`
- Each group of `key/value` pairs is contained within it's own squiggly brackets `{}`
- Just like how every `key/value` MUST end with a comma EXCEPT for the last one, every group of `key/values` MUST end with a comma EXCEPT for the last one

To add a new specialist, create a new grouping after the last one in the list, making sure to put commas in the right spots and follow the formatting guidelines above and found in the [Editing a JSON File](#editingajsonfile) section. The "image" value should be whatever the image name (including the .png/.jpg/.gif extension) is of the one you uploaded to [`src/images/specialists/`](src/images/specialists).

You can also reorder and delete specialists, just make sure to follow the formatting guidelines.

<a name="updatingtestimonials"/>

### **Updating Testimonials**

Updating testimonials follows a similar approach as [Updating Specialists](#updatingspecialists). Navigate to [`src/content/testimonials.json`](src/content/testimonials.json) to edit the testimonials content file.

From there, you will see a similar structure of the key "data" relating to a list of values. As you add/edit/remove testimonials, make sure to follow the guidelines in [Editing a JSON File](#editingajsonfile) and the additional guidelines mentioned in [Updating Specialists](#updatingspecialists).

There are a couple of unique fields in the testimonials document. The general structure looks like this:

```js
{
  data: [
    {
      "snippet": "We will...",
      "name": "Wendy",
      "status": null,
      "htmlContent": "<p>We will...</p>",
      "fullColumn": false
    },
    {
      "snippet": "While our...",
      "name": "Vicky W. and Paul F.",
      "status": null,
      "htmlContent": "<p>While our...</p>",
      "fullColumn": true
    },
    {
      "snippet": "I can say...",
      "name": "Andy B.",
      "status": "Dad of 3rd Graders",
      "htmlContent": "<p>Paul was...</p>",
      "fullColumn": false
    }
  ]
}
```

- **snippet**: the snippet field is the shortened bit of text that will appear on the page
- **name**: the name of the individual(s) that contributed the testimonial
- **status**: the relation of the individual(s) that contributed the testimonial. This can be any text value like "Parent" or "Student" or "Teacher". It can also be `null` (NO quotes around a `null` value) if you don't want any status to display
- **htmlContent**: The full content of the testimonial for when someone clicks to read the whole thing. This will render as HTML and at a minimum must include a paragraph - `<p>Some text here</p>`. Refer to [HTML in the JSON](#htmlinjson) for more information.
- **fullColumn**: This can be `true` or `false` (NO quotes around `true`/`false` values). If `true`, the quote will render the full-width of the page instead of as half.


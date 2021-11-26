---
title: "Contact That's My JAMstack"
layout: 'templates/interior.njk'
---


Want to be on the show? Want to just let me know that you enjoy the show? Want to say hi? Shoot me a message below!

## Say hi or tell me you want to be on the show
<form class="form" netlify name="Contact" action="/thank-you/">
    <label class="form__label" for="name">Name
        <input type="text" name="name">
    </label>
    <label class="form__label" for="email">Email
        <input type="email" name="email">
    </label>
    <label class="form__label form__full" for="comment">Comment or details about why you're reaching out
        <textarea name="comment" rows="15"></textarea>
    </label>
    <input type="submit" value="Send Now" class="button">
</form>
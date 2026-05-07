---
slug: technology-as-a-gift
title: "Technology as a Gift"
---

What does it mean to see technology as a gift? The experimental educational program '[SFPC Summer 2019 in Yamaguchi](https://www.ycam.jp/en/events/2019/sfpc/),' held in Yamaguchi, Japan in 2019, began from this very question. Organized by the [School For Poetic Computation (SFPC)](https://www.instagram.com/sfpc_nyc/), an experimental school based in New York, the program explored the intersection of art, code, hardware, and theory under the theme "Technology as a Gift." Having followed SFPC's work with great interest, I participated in this ten-day program just before the Chuseok holiday in 2019, and it was there that I was able to completely shift my perspective on the products and technology I build as a software developer.

<!-- truncate -->

:::note

A reflection on participating in [SFPC Summer 2019 in Yamaguchi](https://medium.com/sfpc/sfpc-in-yamaguchi-thanksgiving-for-the-program-1336f8c5e63f)

:::

## The Meaning of a Gift

When we try to understand something from a new angle, we often turn to metaphor. Seeing technology as a gift starts with understanding the essence of a gift itself.

![](/img/blog/2024-10-27-technology-as-a-gift/1.png)

The "This is a gift" checkbox you encounter when ordering on Amazon doesn't simply signal a functional difference: no receipt, add a message card. It represents something deeper: thoughtfulness. When we choose a gift, we think beyond the transaction itself. We think more carefully about our relationship with the recipient, about what they actually need. We move past the bestsellers and algorithm recommendations, and instead make deliberate choices from options selected with the recipient's tastes and situation in mind.

## Seeing a Friend's Name as Nothing More Than a String

I came to understand just how important this shift in perspective really is through a small incident during the program.

On day three, a Japanese participant named Kiwako proposed a "coffee chat" idea for students, SFPC instructors, and YCAM staff. The idea: gather people who wanted to participate, randomly pair them one-on-one, and give everyone a chance to get to know each other. Jim, a Thai participant, and I volunteered to build the random matching system. Jim took the front end; I handled the back end, writing the matching logic and the code to store matching records. Implementation took a single night. On the first day the system was available, everyone who signed up found their partner on the screen and spent time together.

![](/img/blog/2024-10-27-technology-as-a-gift/2.gif)

The incident happened on the second day of running matches. That day, the number of sign-ups was odd. Our system handled the last unpaired person like `("John Doe", "")`. A friend named Takashi appeared at the very bottom of the screen without a partner, and he looked somewhat confused. Kiwako quickly added him to the last group to make it a three-person coffee chat, but I felt a deep sense of regret. Until that moment, I had been looking at the list of names as nothing more than an array of text data. I hadn't thought at all about the experiences and feelings of the people behind each name.

If only I had seen this system as a gift for people who were looking forward to the moment of connecting with someone new...

## Giving Gifts to Developers Too

Since that small incident in 2019, I've carried with me a mindset of treating the products I work on as gifts. In truth, seeing a product as a gift aligns with the User Experience (UX)-centered approach to product design that has become widely adopted across the industry. But the context in which we usually discuss UX tends to be limited to end users of B2C services.

As someone who began their career as a backend API developer, what I found myself thinking more deeply about was Developer Experience. Whenever I encountered undocumented APIs hiding behind "it's just for internal use," documentation that the author clearly hadn't read themselves, or endpoint designs built on no discernible principles, I kept asking the same question: why, after dividing software into modules, adopting microservice architectures, and reshaping organizations to match, are we so negligent when it comes to organizing the protocols these systems use to communicate with each other? It's even more disheartening when I sense an attitude of "build it and they'll figure it out" in the products of companies that provide APIs or SDKs to business customers.

But shouldn't developers deserve good gifts too? We ought to place far greater value on the act of giving gifts to developers. And those gifts will ultimately have to be something we developers give to one another.

All this time, I've been searching for a role where I can put these ideas into practice. Starting in November, I'm beginning a new challenge as a Developer Advocate. When technology becomes a gift, we move beyond mere feature implementation and think more deeply about the experience of both users and developers alike. That, in turn, leads to a better development culture and better products. I'm now ready to seriously explore and practice what the perspective of "technology as a gift" can bring about.

Next post topic: **Someone who delivers technology as a gift: starting as a Developer Advocate**

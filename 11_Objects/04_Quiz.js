const Book = {
    "id": 2,
    "volumeInfo": {
        "title": "Developer Testing",
        "subtitle": "Building Quality Into Software",
        "authors": [
            "Alexander Tarlinder"
        ],
        "publisher": "Addison-Wesley Signature Series (Cohn)",
        "publishedDate": "2016",
        "description": "To build high-quality software, you need to write testable code. That's harder than it seems: it requires insights drawn from arenas ranging from software craftsmanship to unit testing, refactoring to test-driven development. Most programming books either discuss testing only briefly, or drill down on just one or two techniques, with little guidance on how to systematically verify code. Most testing books, on the other hand, focus on a specific testing process, without showing how to write software that can be easily and systematically tested. In Developer Testing, leading software engineering consultant Alexander Tarnowski strikes an optimal balance, integrating insights from multiple disciplines to help frustrated practitioners get better results. Drawing on his extensive experience as a mentor and trainer, he offers insights that help you accelerate through the typical software assurance learning curve, so you can progress far more rapidly. Tarnowski organizes his insights into \"chunks\" to help you quickly absorb key concepts, and focuses on technology-agnostic approaches you can keep using with any new language, platform, or toolset. The first guide to cover testing mindset, techniques, and applications from the developer's perspective, Developer Testing will help developers get what they really want: better code. -- Provided by publisher.",
        "industryIdentifiers": [
            {
                "type": "ISBN_10",
                "identifier": "0134291069"
            },
            {
                "type": "ISBN_13",
                "identifier": "9780134291062"
            }
        ],
        "pageCount": 0,
        "categories": [
            "Computer programs"
        ],
        
        "language": "en",
    }
}


console.log(Book.volumeInfo.industryIdentifiers[1].type); 

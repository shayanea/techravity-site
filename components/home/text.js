import React, { Component } from "react";

const animationDelay = 3000,
  barAnimationDelay = 3800,
  barWaiting = barAnimationDelay - 3000,
  lettersDelay = 50,
  typeLettersDelay = 150,
  selectionDuration = 500,
  typeAnimationDelay = selectionDuration + 800,
  revealDuration = 600,
  revealAnimationDelay = 1500;

export default class text extends Component {
  componentDidMount() {
    this.initHeadline();
  }

  initHeadline() {
    this.singleLetters($(".cd-headline.letters").find("b"));
    this.animateHeadline($(".cd-headline"));
  }

  singleLetters($words) {
    $words.each(function() {
      var word = $(this),
        letters = word.text().split(""),
        selected = word.hasClass("is-visible");
      for (i in letters) {
        if (word.parents(".rotate-2").length > 0) letters[i] = "<em>" + letters[i] + "</em>";
        letters[i] = selected ? '<i class="in">' + letters[i] + "</i>" : "<i>" + letters[i] + "</i>";
      }
      var newLetters = letters.join("");
      word.html(newLetters).css("opacity", 1);
    });
  }

  animateHeadline($headlines) {
    let duration = animationDelay,
      self = this;
    $headlines.each(function() {
      var headline = $(this);

      if (headline.hasClass("loading-bar")) {
        duration = barAnimationDelay;
        setTimeout(function() {
          headline.find(".cd-words-wrapper").addClass("is-loading");
        }, barWaiting);
      } else if (headline.hasClass("clip")) {
        var spanWrapper = headline.find(".cd-words-wrapper"),
          newWidth = spanWrapper.width() + 10;
        spanWrapper.css("width", newWidth);
      } else if (!headline.hasClass("type")) {
        var words = headline.find(".cd-words-wrapper b"),
          width = 0;
        words.each(function() {
          var wordWidth = $(this).width();
          if (wordWidth > width) width = wordWidth;
        });
        headline.find(".cd-words-wrapper").css("width", width);
      }

      setTimeout(function() {
        self.hideWord(headline.find(".is-visible").eq(0));
      }, duration);
    });
  }

  hideWord = $word => {
    var nextWord = this.takeNext($word),
      self = this;

    if ($word.parents(".cd-headline").hasClass("type")) {
      var parentSpan = $word.parent(".cd-words-wrapper");
      parentSpan.addClass("selected").removeClass("waiting");
      setTimeout(function() {
        parentSpan.removeClass("selected");
        $word
          .removeClass("is-visible")
          .addClass("is-hidden")
          .children("i")
          .removeClass("in")
          .addClass("out");
      }, selectionDuration);
      setTimeout(function() {
        self.showWord(nextWord, typeLettersDelay);
      }, typeAnimationDelay);
    } else if ($word.parents(".cd-headline").hasClass("letters")) {
      var bool = $word.children("i").length >= nextWord.children("i").length ? true : false;
      this.hideLetter($word.find("i").eq(0), $word, bool, lettersDelay);
      this.showLetter(nextWord.find("i").eq(0), nextWord, bool, lettersDelay);
    } else if ($word.parents(".cd-headline").hasClass("clip")) {
      $word.parents(".cd-words-wrapper").animate({ width: "2px" }, revealDuration, function() {
        this.switchWord($word, nextWord);
        this.showWord(nextWord);
      });
    } else if ($word.parents(".cd-headline").hasClass("loading-bar")) {
      $word.parents(".cd-words-wrapper").removeClass("is-loading");
      this.switchWord($word, nextWord);
      setTimeout(function() {
        self.hideWord(nextWord);
      }, barAnimationDelay);
      setTimeout(function() {
        $word.parents(".cd-words-wrapper").addClass("is-loading");
      }, barWaiting);
    } else {
      this.switchWord($word, nextWord);
      setTimeout(function() {
        self.hideWord(nextWord);
      }, animationDelay);
    }
  };

  showWord($word, $duration) {
    let self = this;
    if ($word.parents(".cd-headline").hasClass("type")) {
      this.showLetter($word.find("i").eq(0), $word, false, $duration);
      $word.addClass("is-visible").removeClass("is-hidden");
    } else if ($word.parents(".cd-headline").hasClass("clip")) {
      $word.parents(".cd-words-wrapper").animate({ width: $word.width() + 10 }, revealDuration, function() {
        setTimeout(function() {
          self.hideWord($word);
        }, revealAnimationDelay);
      });
    }
  }

  hideLetter($letter, $word, $bool, $duration) {
    $letter.removeClass("in").addClass("out");
    let self = this;
    if (!$letter.is(":last-child")) {
      setTimeout(function() {
        this.hideLetter($letter.next(), $word, $bool, $duration);
      }, $duration);
    } else if ($bool) {
      setTimeout(function() {
        self.hideWord(takeNext($word));
      }, animationDelay);
    }

    if ($letter.is(":last-child") && $("html").hasClass("no-csstransitions")) {
      var nextWord = takeNext($word);
      this.switchWord($word, nextWord);
    }
  }

  showLetter($letter, $word, $bool, $duration) {
    $letter.addClass("in").removeClass("out");
    let self = this;
    if (!$letter.is(":last-child")) {
      setTimeout(function() {
        self.showLetter($letter.next(), $word, $bool, $duration);
      }, $duration);
    } else {
      if ($word.parents(".cd-headline").hasClass("type")) {
        setTimeout(function() {
          $word.parents(".cd-words-wrapper").addClass("waiting");
        }, 200);
      }
      if (!$bool) {
        setTimeout(function() {
          self.hideWord($word);
        }, animationDelay);
      }
    }
  }

  takeNext($word) {
    return !$word.is(":last-child")
      ? $word.next()
      : $word
          .parent()
          .children()
          .eq(0);
  }

  takePrev($word) {
    return !$word.is(":first-child")
      ? $word.prev()
      : $word
          .parent()
          .children()
          .last();
  }

  switchWord($oldWord, $newWord) {
    $oldWord.removeClass("is-visible").addClass("is-hidden");
    $newWord.removeClass("is-hidden").addClass("is-visible");
  }
  render() {
    return (
      <span className="cd-words-wrapper">
        <b className="is-visible">back-end developers,</b>
        <b>front-end developers,</b>
        <b>UI/UX designers,</b>
        <b>graphic designers,</b>
        <b>Android developers,</b>
        <b>IOS developers,</b>
      </span>
    );
  }
}

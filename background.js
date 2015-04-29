chrome.omnibox.onInputChanged.addListener(
  function(text, suggest) {
    var links = [
    {content: "http://laravel.com/docs/5.0", description: "Home / Installation"},
    {content: "http://laravel.com/docs/5.0#install-composer", description: "Installation / Install Composer"},
    {content: "http://laravel.com/docs/5.0#install-laravel", description: "Installation / Install Laravel"},
    {content: "http://laravel.com/docs/5.0/releases#support-policy", description: "Prologue / Releases / Support Policy"},
    {content: "http://laravel.com/docs/5.0/releases#laravel-5.0", description: "Prologue / Releases / Laravel 5.0"},
    {content: "http://laravel.com/docs/5.0/releases#laravel-5.0", description: "Prologue / Releases / Laravel 5.0"},
    {content: "http://laravel.com/docs/5.0/releases#laravel-4.2", description: "Prologue / Releases / Laravel 4.2"},
    {content: "http://laravel.com/docs/5.0/releases#laravel-4.1", description: "Prologue / Releases / Laravel 4.1"},
    {content: "http://laravel.com/docs/5.0/routing#basic-routing", description: "Basics / Routing / Basic Routing"},
    {content: "http://laravel.com/docs/5.0/routing#csrf-protection", description: "Basics / Routing / CSRF Protection"},
  ]; 

    var result = links.filter(function(row) {
      if (row.description.toLowerCase().indexOf(text.toLowerCase()) > -1) {
        return true;
      } else {
        return false;
      }
    });
    result;
    suggest(links.filter(function(row) {
      if (row.description.toLowerCase().indexOf(text.toLowerCase()) > -1) {
        return true;
      } else {
        return false;
      }
    }));
  });

// This event is fired with the user accepts the input in the omnibox.
chrome.omnibox.onInputEntered.addListener(function(text) {
    chrome.tabs.create({ url: text });
});

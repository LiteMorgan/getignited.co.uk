document.getElementById('facebookShare').onclick = function() {
  const pageURL   = document.querySelector('[data-link]');
  const shareLink = pageURL.dataset.link;

  FB.ui({
    method: 'share',
    mobile_iframe: true,
    href: shareLink,
  }, function(response){});
};

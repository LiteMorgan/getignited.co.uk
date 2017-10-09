document.getElementById('facebookShare').onclick = function() {
  FB.ui({
    method: 'share',
    mobile_iframe: true,
    href: '',
  }, function(response){});
};
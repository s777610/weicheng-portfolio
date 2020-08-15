(function () {
  var e, t, a, r, l, i, d, m, u, c, o;
  for (
    e = 'www.youracclaim.com',
      c = function (e) {
        if (null != e)
          return /(.*\.youracclaim.com$|(acclaim\.local|localhost|web):500[0-1]$)/.test(
            e
          )
            ? e
            : void 0;
      },
      i = 0,
      d = (m = (function (e) {
        var t, a, r, l, i;
        if (null != document.querySelectorAll)
          return document.querySelectorAll('[data-' + e + ']');
        for (
          i = [], r = 0, l = (t = document.getElementsByTagName('*')).length;
          r < l;
          r++
        )
          (a = t[r]).getAttribute('data-' + e) && i.push(a);
        return i;
      })('share-badge-id')).length;
    i < d;
    i++
  )
    (a = (r = m[i]).attributes.getNamedItem('data-share-badge-id').value),
      (o = r.attributes.getNamedItem('data-iframe-width').value),
      (l = r.attributes.getNamedItem('data-iframe-height').value),
      (t = c(
        null != (u = r.attributes.getNamedItem('data-badge-host'))
          ? u.value
          : void 0
      )) || (t = e),
      (r.outerHTML =
        '<iframe name="acclaim-badge" allowTransparency="true" frameborder="0" id="embedded-badge-' +
        a +
        '" scrolling="no" src="//' +
        t +
        '/embedded_badge/' +
        a +
        '" style="width: ' +
        o +
        'px; height: ' +
        l +
        'px;" title="View my verified achievement on Acclaim." ></iframe>');
}.call(this));

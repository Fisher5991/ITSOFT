(function () {
  var riskTabs = document.querySelector('.risk.tabs');
  var tabsContents = riskTabs.querySelectorAll('.tabs__content');
  var tabsItems = riskTabs.querySelectorAll('.tabs__item');
  var currentActiveTab = riskTabs.querySelector('.tabs__content.js-active');
  var currentActiveContent = riskTabs.querySelector('.tabs__item.js-active');
  var currentIndex;

  var onTabClick = function (evt, index) {
    evt.preventDefault();
    currentIndex = index;
    currentActiveTab.classList.remove('js-active');
    currentActiveContent.classList.remove('js-active');
    currentActiveTab = tabsItems[currentIndex];
    currentActiveContent = tabsContents[currentIndex];
    currentActiveTab.classList.add('js-active');
    currentActiveContent.classList.add('js-active');
  }

  var addTabClickListener = function (tab, index) {
    tab.addEventListener('click', function (evt) {
      onTabClick(evt, index);
    });
  }

  for (var i = 0; i < tabsItems.length; i++) {
    addTabClickListener(tabsItems[i], i);
  }
})();

(function($){$(document).ready(function(){$(document).on('click','.show-code a.btn',function(e){e.preventDefault();$(this).parent().next('.tab-wrap').slideToggle();});$(document).on('click','.tab-wrap .nav-item',function(e){e.preventDefault();var index=$(this).index();var $tabWrap=$(this).closest('.tab-wrap');var $tabs=$tabWrap.find('.tab-content');var $tabPanes=$tabs.find('.tab-pane');$tabPanes.hide();$tabPanes.eq(index).show();$tabWrap.find('.nav-link.active').removeClass('active');$(this).find('.nav-link').addClass('active')});$(document).on('click','.view-source',function(e){e.preventDefault();alert('Please press Ctrl+U to view page source');});var $preTags=$('pre');$preTags.addClass('prettyprint');if($preTags.length>0){$.getScript('https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js?lang=css&skin=sunburst');}});}(jQuery));
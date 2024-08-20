import{_ as t,c as s,o as a,a2 as o}from"./chunks/framework.C94oF1kp.js";const r="/assets/10.DdQzYQZB.png",e="/assets/11.CVbk3g3k.png",u=JSON.parse('{"title":"Поиск компонент связности в графе.","description":"","frontmatter":{},"headers":[],"relativePath":"tasks/046.md","filePath":"tasks/046.md"}'),n={name:"tasks/046.md"},i=o('<h1 id="поиск-компонент-связности-в-графе" tabindex="-1">Поиск компонент связности в графе. <a class="header-anchor" href="#поиск-компонент-связности-в-графе" aria-label="Permalink to &quot;Поиск компонент связности в графе.&quot;">​</a></h1><h2 id="определение" tabindex="-1">Определение <a class="header-anchor" href="#определение" aria-label="Permalink to &quot;Определение&quot;">​</a></h2><p><strong>Поиск компонент связности</strong> в графе заключается в нахождении групп вершин, каждая из которых связана друг с другом напрямую или через промежуточные вершины, но не связана с вершинами из других групп.</p><h2 id="алгоритм-поиска-компонент-связности" tabindex="-1">Алгоритм поиска компонент связности <a class="header-anchor" href="#алгоритм-поиска-компонент-связности" aria-label="Permalink to &quot;Алгоритм поиска компонент связности&quot;">​</a></h2><p><strong>Алгоритм поиска компонент связности</strong> основан на DFS:</p><ol><li><strong>Выбор стартовой вершины:</strong> Алгоритм начинает с выбора одной из вершин графа в качестве стартовой.</li><li><strong>Пометка вершины как посещенной и добавление в компонент:</strong> Стартовая вершина помечается как посещенная и добавляется в текущую компоненту связности.</li><li><strong>Рекурсивный обход смежных вершин:</strong> Для каждой вершины смежной с текущей вершиной , которая еще не была посещена, алгоритм выполняет те же действия: помечает ее как посещенную, добавляет в текущую компоненту, а затем рекурсивно продолжает обход из этой вершины.</li><li><strong>Поиск следующей непосещенной вершины:</strong> Алгоритм ищет следующую непосещенную вершину в графе и повторяет процесс обхода с нее, если такая вершина существует. Если не существует, обход заканчивается, и текущая компонента связности считается найденной.</li><li><strong>Повторение для оставшихся не посещённых вершин:</strong> Алгоритм повторяет процесс поиска компонент связности для всех оставшихся не посещённых вершин графа.</li><li><strong>Возвращение всех компонент связности:</strong> По завершении работы алгоритма возвращается список компонент связности, каждая из которых содержит вершины, входящие в нее.</li></ol><p><strong>Этот процесс позволяет идентифицировать все непересекающиеся группы вершин в графе, которые связаны друг с другом.</strong></p><p><img src="'+r+'" alt=""></p><p><img src="'+e+'" alt=""></p>',9),l=[i];function _(c,p,g,d,h,m){return a(),s("div",null,l)}const k=t(n,[["render",_]]);export{u as __pageData,k as default};

/**
 * Imprime un ou plusieurs éléments de la page : ils sont copiés dans #print-root,
 * et les règles @media print (index.css) cachent tout le reste.
 */
export function printNodes(nodes: HTMLElement[]) {
  if (nodes.length === 0) return;
  let root = document.getElementById('print-root');
  if (!root) {
    root = document.createElement('div');
    root.id = 'print-root';
    document.body.appendChild(root);
  }
  root.innerHTML = '';
  const wrap = document.createElement('div');
  wrap.className = 'print-cards';
  nodes.forEach((n) => wrap.appendChild(n.cloneNode(true)));
  root.appendChild(wrap);
  window.print();
}

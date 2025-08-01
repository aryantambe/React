const reactElement={
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children:'Click me to visit google'
}
const root=document.querySelector('#root');

function customRender(reactElement,root){
    // const domElement=document.createElement(reactElement.type)
    // domElement.innerHTML=reactElement.children;
    // domElement.setAttribute('href',reactElement.props.href);
    // domElement.setAttribute('target',reactElement.props.target);

    // root.appendChild(domElement);

    const domElement=document.createElement(reactElement.type)
    domElement.innerHTML=reactElement.children;
    for (const prop in reactElement.props) {
        if(prop==='children') continue;
        domElement.setAttribute(prop,reactElement.props[prop]);
    }
    root.appendChild(domElement)

}
customRender(reactElement,root);

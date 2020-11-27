/*
 * @Description: 
 * @Author: xutao
 * @Date: 2020-11-25 14:57:55
 * @LastEditors: xutao
 * @LastEditTime: 2020-11-25 17:57:50
 */
class MyEvent {
    public type: string
    // ...
}
class MyEventTarget {
    private listeners: object = {}
    public addEventListener(type: string, callback: Function) {}
    public removeEventListener(type: string, callback: Function) {}
    public dispatchEvent(event: MyEvent) {}
    // ...
}
class MyNodeList {
    private nodes: MyNode[]
    public length: number
    public item(index: number): MyNode {
        return this.nodes[index]
    }
    // ..
}
class MyNode extends MyEventTarget {
    public readonly childNodes: MyNodeList
    public readonly firstChild: Node | null
    public appendChild(child: MyNode){

    }
    // ...
}
class MyDOMTokenList {
    public readonly length: number
    public value: string
    private _value: string[]
    public item(index: number): string | null {
        return this._value[index]
    }
    public remove(...tokens: string[]) {
        
    }
    // ...
}
class MyElement extends MyNode {
    public readonly classList: MyDOMTokenList
    public className: string
    public readonly clientHeight: number
    public innerHTML: string
    // ..
}
class  MyCSSStyleDeclaration {
    public readonly length: number
    public item(index: number){

    }
    public removeProperty(property: string): string{
        return ''
    }
    // ...
}
class MyHTMLElement extends MyElement {
    public readonly dataset: DOMStringMap
    public readonly offsetHeight: number
    public style: MyCSSStyleDeclaration 
}

let element = window.document.getElementById('1')
element.style.removeProperty('height')

class  MyHTMLDivElement extends  MyHTMLElement{

}

class  MyHTMLImageElement extends  MyHTMLElement{
    public readonly complete: boolean
    public crossOrigin: string
    public src: string
    public decode(): Promise<any>{
        return new Promise((resolve, reject) => {

        })
    }
}

HTMLDivElement
Document
HTMLDocument
HTMLImageElement
window.document
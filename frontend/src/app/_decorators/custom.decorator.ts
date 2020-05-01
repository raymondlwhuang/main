export function AutoUnsubscribe(obs$ = []) {
    return function(constructor: any) {
        const orig = constructor.prototype.ngOnDestroy
        constructor.prototype.ngOnDestroy = function() {
            for(const prop in this) {
                const property = this[prop]
                if(property && typeof property.unsubscribe === "function" && !obs$.includes(property))
                    obs$.push(property)
            }
            for(const ob$ of obs$) {
                if(ob$) {
                    ob$.unsubscribe()
                    console.log('unsubscrib had been fired');  
                }
            }
            orig.apply()
        }
    }
}
export function Frozen(constructor: Function) {
    Object.freeze(constructor);
    Object.freeze(constructor.prototype);
}

export function basicDecorator(config) {
    return function(target,key,descriptor){
        const original = descriptor.value;
        descriptor.value = function(...args: any[]){

        }

        return descriptor;
    }

}

export function Emoji(){
    return function(target,key){
        let val = target[key];
        const getter = ()=>{
            return this.val;
        }
        const settter = (next)=>{
            this.val = next;
        }
        Object.defineProperty(target,key,{
            get: getter,
            set: settter,
            enumerable: true,
            configurable: true,
        })
    }

}
export function HtmlConsole(config?) {
    return function(target,key,descriptor){
        const original = descriptor.value;
        descriptor.value = function(...args: any[]){
            let fireCaseOutput = document.getElementById(config.id);
            if(fireCaseOutput) {
                args.forEach(arg=>{
                    if(!arg || arg =='') fireCaseOutput.innerHTML = '';
                    else {
                        if (typeof arg == 'object') {
                            fireCaseOutput.innerHTML += (JSON && JSON.stringify ? JSON.stringify(arg) : arg) + '<br />';
                        } else {
                            fireCaseOutput.innerHTML += arg + '<br />';
                        }    
                    }
                    return arg;
                });
    
            }
        }
        return descriptor;
    }

}

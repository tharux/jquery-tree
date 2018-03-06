// import 'ie8';
// import 'dom4';

(function(){
    var iterator = function(dataArray,currentParent){
        dataArray.forEach(element => {
            
            var LI = document.createElement('li');
            LI.innerText = element.Name;
            currentParent.appendChild(LI);

            if(element.children){
                var childUL = document.createElement('ul');
                iterator(element.children,childUL);
                currentParent.appendChild(childUL);
            }
            
        });
    };

    defaultConfig = {

    };

    HTMLElement.prototype.tree = function(config){
            if(!config){
                config = defaultConfig;
            }

            if(config.data){
                var UL = document.createElement('ul');
                iterator(config.data,UL);
                this.appendChild(UL);
            }
        };
})();
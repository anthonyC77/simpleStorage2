(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{12:function(e,t,n){e.exports=n(21)},17:function(e,t,n){},20:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(6),o=n.n(r),s=(n(17),n(1)),c=n.n(s),d=n(2),l=n(7),u=n(8),p=n(10),m=n(9),y=n(11),f=n(4),b=n(3),T=n.n(b),v=function(){return new Promise((function(e,t){window.addEventListener("load",Object(d.a)(c.a.mark((function n(){var a,i,r,o;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!window.ethereum){n.next=13;break}return a=new T.a(window.ethereum),n.prev=2,n.next=5,window.ethereum.enable();case 5:e(a),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(2),t(n.t0);case 11:n.next=14;break;case 13:window.web3?(i=window.web3,console.log("Injected web3 detected."),e(i)):(r=new T.a.providers.HttpProvider("http://127.0.0.1:8545"),o=new T.a(r),console.log("No web3 instance injected, using Local web3."),e(o));case 14:case"end":return n.stop()}}),n,null,[[2,8]])}))))}))},_=(n(20),function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={storageValue:0,web3:null,accounts:null,contract:null},n.componentDidMount=Object(d.a)(c.a.mark((function e(){var t,a,i,r,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v();case 3:return t=e.sent,e.next=6,t.eth.getAccounts();case 6:return a=e.sent,e.next=9,t.eth.net.getId();case 9:i=e.sent,r=f.networks[i],o=new t.eth.Contract(f.abi,r&&r.address),n.setState({web3:t,accounts:a,contract:o},n.runExample),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(0),alert("Failed to load web3, accounts, or contract. Check console for details."),console.error(e.t0);case 19:case"end":return e.stop()}}),e,null,[[0,15]])}))),n.runExample=Object(d.a)(c.a.mark((function e(){var t,a,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.state,t.accounts,a=t.contract,e.next=3,a.methods.get().call();case 3:i=e.sent,n.setState({storageValue:i});case 5:case"end":return e.stop()}}),e)}))),n.set=Object(d.a)(c.a.mark((function e(){var t,a,i,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.state,a=t.accounts,i=t.contract,r=n.storage.value,e.next=4,i.methods.set(r).send({from:a[0]});case 4:n.runExample(),n.storage.value=0;case 6:case"end":return e.stop()}}),e)}))),n}return Object(y.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return this.state.web3?i.a.createElement("div",{className:"App"},i.a.createElement("h1",null,"Good to Go!"),i.a.createElement("p",null,"Your Truffle Box is installed and ready."),i.a.createElement("h2",null,"Smart Contract Example"),i.a.createElement("p",null,"If your contracts compiled and migrated successfully, below will show a stored value of 5 (by default)."),i.a.createElement("p",null,"Try changing the value stored on ",i.a.createElement("strong",null,"line 40")," of App.js."),i.a.createElement("div",null,"The stored value is: ",this.state.storageValue),i.a.createElement("div",null,"Set a new stored value:",i.a.createElement("div",{className:"form-group mr-sm-2"},i.a.createElement("input",{id:"storage",type:"number",ref:function(t){e.storage=t},className:"form-control",required:!0})),i.a.createElement("button",{onClick:this.set,className:"btn btn-primary"},"Set"))):i.a.createElement("div",null,"Loading Web3, accounts, and contract...")}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},4:function(e){e.exports=JSON.parse('{"contractName":"SimpleStorage","abi":[{"inputs":[{"internalType":"uint256","name":"x","type":"uint256"}],"name":"set","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"get","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true}],"metadata":"{\\"compiler\\":{\\"version\\":\\"0.8.1+commit.df193b15\\"},\\"language\\":\\"Solidity\\",\\"output\\":{\\"abi\\":[{\\"inputs\\":[],\\"name\\":\\"get\\",\\"outputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"x\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"set\\",\\"outputs\\":[],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"}],\\"devdoc\\":{\\"kind\\":\\"dev\\",\\"methods\\":{},\\"version\\":1},\\"userdoc\\":{\\"kind\\":\\"user\\",\\"methods\\":{},\\"version\\":1}},\\"settings\\":{\\"compilationTarget\\":{\\"/C/Node/simpleStorage2/contracts/SimpleStorage.sol\\":\\"SimpleStorage\\"},\\"evmVersion\\":\\"istanbul\\",\\"libraries\\":{},\\"metadata\\":{\\"bytecodeHash\\":\\"ipfs\\"},\\"optimizer\\":{\\"enabled\\":false,\\"runs\\":200},\\"remappings\\":[]},\\"sources\\":{\\"/C/Node/simpleStorage2/contracts/SimpleStorage.sol\\":{\\"keccak256\\":\\"0xd24e0f5ab1de46f8d9f7faae385d05911de4af1feacbe87915aab004f37d0565\\",\\"license\\":\\"MIT\\",\\"urls\\":[\\"bzz-raw://73cd0192dc1cbab685eb5e17bee0a1c05008487bda2a7159d433acdc47275e56\\",\\"dweb:/ipfs/Qme5ADtszWEgDtSVbkoEVg2rtzM5d3VZHDFGPTbKai1aZZ\\"]}},\\"version\\":1}","bytecode":"0x608060405234801561001057600080fd5b5061012f806100206000396000f3fe6080604052348015600f57600080fd5b506004361060325760003560e01c806360fe47b11460375780636d4ce63c14604f575b600080fd5b604d600480360381019060499190608f565b6069565b005b60556073565b6040516060919060c2565b60405180910390f35b8060008190555050565b60008054905090565b60008135905060898160e5565b92915050565b60006020828403121560a057600080fd5b600060ac84828501607c565b91505092915050565b60bc8160db565b82525050565b600060208201905060d5600083018460b5565b92915050565b6000819050919050565b60ec8160db565b811460f657600080fd5b5056fea264697066735822122069d04e49e92845f79d178ef87ee5a518e2198ac529a03e25fd547900fb96588664736f6c63430008010033","deployedBytecode":"0x6080604052348015600f57600080fd5b506004361060325760003560e01c806360fe47b11460375780636d4ce63c14604f575b600080fd5b604d600480360381019060499190608f565b6069565b005b60556073565b6040516060919060c2565b60405180910390f35b8060008190555050565b60008054905090565b60008135905060898160e5565b92915050565b60006020828403121560a057600080fd5b600060ac84828501607c565b91505092915050565b60bc8160db565b82525050565b600060208201905060d5600083018460b5565b92915050565b6000819050919050565b60ec8160db565b811460f657600080fd5b5056fea264697066735822122069d04e49e92845f79d178ef87ee5a518e2198ac529a03e25fd547900fb96588664736f6c63430008010033","immutableReferences":{},"generatedSources":[],"deployedGeneratedSources":[{"ast":{"nodeType":"YulBlock","src":"0:980:2","statements":[{"body":{"nodeType":"YulBlock","src":"59:87:2","statements":[{"nodeType":"YulAssignment","src":"69:29:2","value":{"arguments":[{"name":"offset","nodeType":"YulIdentifier","src":"91:6:2"}],"functionName":{"name":"calldataload","nodeType":"YulIdentifier","src":"78:12:2"},"nodeType":"YulFunctionCall","src":"78:20:2"},"variableNames":[{"name":"value","nodeType":"YulIdentifier","src":"69:5:2"}]},{"expression":{"arguments":[{"name":"value","nodeType":"YulIdentifier","src":"134:5:2"}],"functionName":{"name":"validator_revert_t_uint256","nodeType":"YulIdentifier","src":"107:26:2"},"nodeType":"YulFunctionCall","src":"107:33:2"},"nodeType":"YulExpressionStatement","src":"107:33:2"}]},"name":"abi_decode_t_uint256","nodeType":"YulFunctionDefinition","parameters":[{"name":"offset","nodeType":"YulTypedName","src":"37:6:2","type":""},{"name":"end","nodeType":"YulTypedName","src":"45:3:2","type":""}],"returnVariables":[{"name":"value","nodeType":"YulTypedName","src":"53:5:2","type":""}],"src":"7:139:2"},{"body":{"nodeType":"YulBlock","src":"218:196:2","statements":[{"body":{"nodeType":"YulBlock","src":"264:16:2","statements":[{"expression":{"arguments":[{"kind":"number","nodeType":"YulLiteral","src":"273:1:2","type":"","value":"0"},{"kind":"number","nodeType":"YulLiteral","src":"276:1:2","type":"","value":"0"}],"functionName":{"name":"revert","nodeType":"YulIdentifier","src":"266:6:2"},"nodeType":"YulFunctionCall","src":"266:12:2"},"nodeType":"YulExpressionStatement","src":"266:12:2"}]},"condition":{"arguments":[{"arguments":[{"name":"dataEnd","nodeType":"YulIdentifier","src":"239:7:2"},{"name":"headStart","nodeType":"YulIdentifier","src":"248:9:2"}],"functionName":{"name":"sub","nodeType":"YulIdentifier","src":"235:3:2"},"nodeType":"YulFunctionCall","src":"235:23:2"},{"kind":"number","nodeType":"YulLiteral","src":"260:2:2","type":"","value":"32"}],"functionName":{"name":"slt","nodeType":"YulIdentifier","src":"231:3:2"},"nodeType":"YulFunctionCall","src":"231:32:2"},"nodeType":"YulIf","src":"228:2:2"},{"nodeType":"YulBlock","src":"290:117:2","statements":[{"nodeType":"YulVariableDeclaration","src":"305:15:2","value":{"kind":"number","nodeType":"YulLiteral","src":"319:1:2","type":"","value":"0"},"variables":[{"name":"offset","nodeType":"YulTypedName","src":"309:6:2","type":""}]},{"nodeType":"YulAssignment","src":"334:63:2","value":{"arguments":[{"arguments":[{"name":"headStart","nodeType":"YulIdentifier","src":"369:9:2"},{"name":"offset","nodeType":"YulIdentifier","src":"380:6:2"}],"functionName":{"name":"add","nodeType":"YulIdentifier","src":"365:3:2"},"nodeType":"YulFunctionCall","src":"365:22:2"},{"name":"dataEnd","nodeType":"YulIdentifier","src":"389:7:2"}],"functionName":{"name":"abi_decode_t_uint256","nodeType":"YulIdentifier","src":"344:20:2"},"nodeType":"YulFunctionCall","src":"344:53:2"},"variableNames":[{"name":"value0","nodeType":"YulIdentifier","src":"334:6:2"}]}]}]},"name":"abi_decode_tuple_t_uint256","nodeType":"YulFunctionDefinition","parameters":[{"name":"headStart","nodeType":"YulTypedName","src":"188:9:2","type":""},{"name":"dataEnd","nodeType":"YulTypedName","src":"199:7:2","type":""}],"returnVariables":[{"name":"value0","nodeType":"YulTypedName","src":"211:6:2","type":""}],"src":"152:262:2"},{"body":{"nodeType":"YulBlock","src":"485:53:2","statements":[{"expression":{"arguments":[{"name":"pos","nodeType":"YulIdentifier","src":"502:3:2"},{"arguments":[{"name":"value","nodeType":"YulIdentifier","src":"525:5:2"}],"functionName":{"name":"cleanup_t_uint256","nodeType":"YulIdentifier","src":"507:17:2"},"nodeType":"YulFunctionCall","src":"507:24:2"}],"functionName":{"name":"mstore","nodeType":"YulIdentifier","src":"495:6:2"},"nodeType":"YulFunctionCall","src":"495:37:2"},"nodeType":"YulExpressionStatement","src":"495:37:2"}]},"name":"abi_encode_t_uint256_to_t_uint256_fromStack","nodeType":"YulFunctionDefinition","parameters":[{"name":"value","nodeType":"YulTypedName","src":"473:5:2","type":""},{"name":"pos","nodeType":"YulTypedName","src":"480:3:2","type":""}],"src":"420:118:2"},{"body":{"nodeType":"YulBlock","src":"642:124:2","statements":[{"nodeType":"YulAssignment","src":"652:26:2","value":{"arguments":[{"name":"headStart","nodeType":"YulIdentifier","src":"664:9:2"},{"kind":"number","nodeType":"YulLiteral","src":"675:2:2","type":"","value":"32"}],"functionName":{"name":"add","nodeType":"YulIdentifier","src":"660:3:2"},"nodeType":"YulFunctionCall","src":"660:18:2"},"variableNames":[{"name":"tail","nodeType":"YulIdentifier","src":"652:4:2"}]},{"expression":{"arguments":[{"name":"value0","nodeType":"YulIdentifier","src":"732:6:2"},{"arguments":[{"name":"headStart","nodeType":"YulIdentifier","src":"745:9:2"},{"kind":"number","nodeType":"YulLiteral","src":"756:1:2","type":"","value":"0"}],"functionName":{"name":"add","nodeType":"YulIdentifier","src":"741:3:2"},"nodeType":"YulFunctionCall","src":"741:17:2"}],"functionName":{"name":"abi_encode_t_uint256_to_t_uint256_fromStack","nodeType":"YulIdentifier","src":"688:43:2"},"nodeType":"YulFunctionCall","src":"688:71:2"},"nodeType":"YulExpressionStatement","src":"688:71:2"}]},"name":"abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed","nodeType":"YulFunctionDefinition","parameters":[{"name":"headStart","nodeType":"YulTypedName","src":"614:9:2","type":""},{"name":"value0","nodeType":"YulTypedName","src":"626:6:2","type":""}],"returnVariables":[{"name":"tail","nodeType":"YulTypedName","src":"637:4:2","type":""}],"src":"544:222:2"},{"body":{"nodeType":"YulBlock","src":"817:32:2","statements":[{"nodeType":"YulAssignment","src":"827:16:2","value":{"name":"value","nodeType":"YulIdentifier","src":"838:5:2"},"variableNames":[{"name":"cleaned","nodeType":"YulIdentifier","src":"827:7:2"}]}]},"name":"cleanup_t_uint256","nodeType":"YulFunctionDefinition","parameters":[{"name":"value","nodeType":"YulTypedName","src":"799:5:2","type":""}],"returnVariables":[{"name":"cleaned","nodeType":"YulTypedName","src":"809:7:2","type":""}],"src":"772:77:2"},{"body":{"nodeType":"YulBlock","src":"898:79:2","statements":[{"body":{"nodeType":"YulBlock","src":"955:16:2","statements":[{"expression":{"arguments":[{"kind":"number","nodeType":"YulLiteral","src":"964:1:2","type":"","value":"0"},{"kind":"number","nodeType":"YulLiteral","src":"967:1:2","type":"","value":"0"}],"functionName":{"name":"revert","nodeType":"YulIdentifier","src":"957:6:2"},"nodeType":"YulFunctionCall","src":"957:12:2"},"nodeType":"YulExpressionStatement","src":"957:12:2"}]},"condition":{"arguments":[{"arguments":[{"name":"value","nodeType":"YulIdentifier","src":"921:5:2"},{"arguments":[{"name":"value","nodeType":"YulIdentifier","src":"946:5:2"}],"functionName":{"name":"cleanup_t_uint256","nodeType":"YulIdentifier","src":"928:17:2"},"nodeType":"YulFunctionCall","src":"928:24:2"}],"functionName":{"name":"eq","nodeType":"YulIdentifier","src":"918:2:2"},"nodeType":"YulFunctionCall","src":"918:35:2"}],"functionName":{"name":"iszero","nodeType":"YulIdentifier","src":"911:6:2"},"nodeType":"YulFunctionCall","src":"911:43:2"},"nodeType":"YulIf","src":"908:2:2"}]},"name":"validator_revert_t_uint256","nodeType":"YulFunctionDefinition","parameters":[{"name":"value","nodeType":"YulTypedName","src":"891:5:2","type":""}],"src":"855:122:2"}]},"contents":"{\\n\\n    function abi_decode_t_uint256(offset, end) -> value {\\n        value := calldataload(offset)\\n        validator_revert_t_uint256(value)\\n    }\\n\\n    function abi_decode_tuple_t_uint256(headStart, dataEnd) -> value0 {\\n        if slt(sub(dataEnd, headStart), 32) { revert(0, 0) }\\n\\n        {\\n\\n            let offset := 0\\n\\n            value0 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\\n        }\\n\\n    }\\n\\n    function abi_encode_t_uint256_to_t_uint256_fromStack(value, pos) {\\n        mstore(pos, cleanup_t_uint256(value))\\n    }\\n\\n    function abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed(headStart , value0) -> tail {\\n        tail := add(headStart, 32)\\n\\n        abi_encode_t_uint256_to_t_uint256_fromStack(value0,  add(headStart, 0))\\n\\n    }\\n\\n    function cleanup_t_uint256(value) -> cleaned {\\n        cleaned := value\\n    }\\n\\n    function validator_revert_t_uint256(value) {\\n        if iszero(eq(value, cleanup_t_uint256(value))) { revert(0, 0) }\\n    }\\n\\n}\\n","id":2,"language":"Yul","name":"#utility.yul"}],"sourceMap":"56:176:1:-:0;;;;;;;;;;;;;;;;;;;","deployedSourceMap":"56:176:1:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;103:53;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;160:70;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;103:53;150:1;137:10;:14;;;;103:53;:::o;160:70::-;196:4;215:10;;208:17;;160:70;:::o;7:139:2:-;;91:6;78:20;69:29;;107:33;134:5;107:33;:::i;:::-;59:87;;;;:::o;152:262::-;;260:2;248:9;239:7;235:23;231:32;228:2;;;276:1;273;266:12;228:2;319:1;344:53;389:7;380:6;369:9;365:22;344:53;:::i;:::-;334:63;;290:117;218:196;;;;:::o;420:118::-;507:24;525:5;507:24;:::i;:::-;502:3;495:37;485:53;;:::o;544:222::-;;675:2;664:9;660:18;652:26;;688:71;756:1;745:9;741:17;732:6;688:71;:::i;:::-;642:124;;;;:::o;772:77::-;;838:5;827:16;;817:32;;;:::o;855:122::-;928:24;946:5;928:24;:::i;:::-;921:5;918:35;908:2;;967:1;964;957:12;908:2;898:79;:::o","source":"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.1;\\n\\ncontract SimpleStorage {\\n  uint storedData;\\n\\n  function set(uint x) public {\\n    storedData = x;\\n  }\\n\\n  function get() public view returns (uint) {\\n    return storedData;\\n  }\\n}\\n","sourcePath":"C:/Node/simpleStorage2/contracts/SimpleStorage.sol","ast":{"absolutePath":"/C/Node/simpleStorage2/contracts/SimpleStorage.sol","exportedSymbols":{"SimpleStorage":[59]},"id":60,"license":"MIT","nodeType":"SourceUnit","nodes":[{"id":38,"literals":["solidity","0.8",".1"],"nodeType":"PragmaDirective","src":"32:22:1"},{"abstract":false,"baseContracts":[],"contractDependencies":[],"contractKind":"contract","fullyImplemented":true,"id":59,"linearizedBaseContracts":[59],"name":"SimpleStorage","nodeType":"ContractDefinition","nodes":[{"constant":false,"id":40,"mutability":"mutable","name":"storedData","nodeType":"VariableDeclaration","scope":59,"src":"83:15:1","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":39,"name":"uint","nodeType":"ElementaryTypeName","src":"83:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"visibility":"internal"},{"body":{"id":49,"nodeType":"Block","src":"131:25:1","statements":[{"expression":{"id":47,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"id":45,"name":"storedData","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":40,"src":"137:10:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"id":46,"name":"x","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":42,"src":"150:1:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"137:14:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":48,"nodeType":"ExpressionStatement","src":"137:14:1"}]},"functionSelector":"60fe47b1","id":50,"implemented":true,"kind":"function","modifiers":[],"name":"set","nodeType":"FunctionDefinition","parameters":{"id":43,"nodeType":"ParameterList","parameters":[{"constant":false,"id":42,"mutability":"mutable","name":"x","nodeType":"VariableDeclaration","scope":50,"src":"116:6:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":41,"name":"uint","nodeType":"ElementaryTypeName","src":"116:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"visibility":"internal"}],"src":"115:8:1"},"returnParameters":{"id":44,"nodeType":"ParameterList","parameters":[],"src":"131:0:1"},"scope":59,"src":"103:53:1","stateMutability":"nonpayable","virtual":false,"visibility":"public"},{"body":{"id":57,"nodeType":"Block","src":"202:28:1","statements":[{"expression":{"id":55,"name":"storedData","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":40,"src":"215:10:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"functionReturnParameters":54,"id":56,"nodeType":"Return","src":"208:17:1"}]},"functionSelector":"6d4ce63c","id":58,"implemented":true,"kind":"function","modifiers":[],"name":"get","nodeType":"FunctionDefinition","parameters":{"id":51,"nodeType":"ParameterList","parameters":[],"src":"172:2:1"},"returnParameters":{"id":54,"nodeType":"ParameterList","parameters":[{"constant":false,"id":53,"mutability":"mutable","name":"","nodeType":"VariableDeclaration","scope":58,"src":"196:4:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":52,"name":"uint","nodeType":"ElementaryTypeName","src":"196:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"visibility":"internal"}],"src":"195:6:1"},"scope":59,"src":"160:70:1","stateMutability":"view","virtual":false,"visibility":"public"}],"scope":60,"src":"56:176:1"}],"src":"32:201:1"},"legacyAST":{"absolutePath":"/C/Node/simpleStorage2/contracts/SimpleStorage.sol","exportedSymbols":{"SimpleStorage":[59]},"id":60,"license":"MIT","nodeType":"SourceUnit","nodes":[{"id":38,"literals":["solidity","0.8",".1"],"nodeType":"PragmaDirective","src":"32:22:1"},{"abstract":false,"baseContracts":[],"contractDependencies":[],"contractKind":"contract","fullyImplemented":true,"id":59,"linearizedBaseContracts":[59],"name":"SimpleStorage","nodeType":"ContractDefinition","nodes":[{"constant":false,"id":40,"mutability":"mutable","name":"storedData","nodeType":"VariableDeclaration","scope":59,"src":"83:15:1","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":39,"name":"uint","nodeType":"ElementaryTypeName","src":"83:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"visibility":"internal"},{"body":{"id":49,"nodeType":"Block","src":"131:25:1","statements":[{"expression":{"id":47,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"id":45,"name":"storedData","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":40,"src":"137:10:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"id":46,"name":"x","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":42,"src":"150:1:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"137:14:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":48,"nodeType":"ExpressionStatement","src":"137:14:1"}]},"functionSelector":"60fe47b1","id":50,"implemented":true,"kind":"function","modifiers":[],"name":"set","nodeType":"FunctionDefinition","parameters":{"id":43,"nodeType":"ParameterList","parameters":[{"constant":false,"id":42,"mutability":"mutable","name":"x","nodeType":"VariableDeclaration","scope":50,"src":"116:6:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":41,"name":"uint","nodeType":"ElementaryTypeName","src":"116:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"visibility":"internal"}],"src":"115:8:1"},"returnParameters":{"id":44,"nodeType":"ParameterList","parameters":[],"src":"131:0:1"},"scope":59,"src":"103:53:1","stateMutability":"nonpayable","virtual":false,"visibility":"public"},{"body":{"id":57,"nodeType":"Block","src":"202:28:1","statements":[{"expression":{"id":55,"name":"storedData","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":40,"src":"215:10:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"functionReturnParameters":54,"id":56,"nodeType":"Return","src":"208:17:1"}]},"functionSelector":"6d4ce63c","id":58,"implemented":true,"kind":"function","modifiers":[],"name":"get","nodeType":"FunctionDefinition","parameters":{"id":51,"nodeType":"ParameterList","parameters":[],"src":"172:2:1"},"returnParameters":{"id":54,"nodeType":"ParameterList","parameters":[{"constant":false,"id":53,"mutability":"mutable","name":"","nodeType":"VariableDeclaration","scope":58,"src":"196:4:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":52,"name":"uint","nodeType":"ElementaryTypeName","src":"196:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"visibility":"internal"}],"src":"195:6:1"},"scope":59,"src":"160:70:1","stateMutability":"view","virtual":false,"visibility":"public"}],"scope":60,"src":"56:176:1"}],"src":"32:201:1"},"compiler":{"name":"solc","version":"0.8.1+commit.df193b15.Emscripten.clang"},"networks":{"3":{"events":{},"links":{},"address":"0xB3C053142A5F549aFaE0560CF3e3F41dFd66d2DF","transactionHash":"0x30c04b07fd5e6d3e65a6b49867b6e1e6a39a840cd62e5633b3256a8eb6bb3051"},"1000":{"events":{},"links":{},"address":"0xd9Dc96182ea6Cd5ACCe0827EC2f372b30Fe8e41F","transactionHash":"0x85f725019a4c0edf36905d9e6dcc5bc87f8ba59da835ca17a67fab3ef33d9e5f"}},"schemaVersion":"3.4.1","updatedAt":"2021-05-29T15:18:17.983Z","networkType":"ethereum","devdoc":{"kind":"dev","methods":{},"version":1},"userdoc":{"kind":"user","methods":{},"version":1}}')}},[[12,1,2]]]);
//# sourceMappingURL=main.b91107f6.chunk.js.map
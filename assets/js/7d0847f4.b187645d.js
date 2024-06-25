"use strict";(self.webpackChunkmongodb_sprout_workshop=self.webpackChunkmongodb_sprout_workshop||[]).push([[139],{3892:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var s=t(4848),i=t(8453);const o={},a="Transactions",r={id:"transactions-and-encryption/transactions",title:"Transactions",description:"MongoDB introduced multi-document ACID transactions in version 4.0, enhancing its capabilities to ensure data",source:"@site/docs/06-transactions-and-encryption/1-transactions.mdx",sourceDirName:"06-transactions-and-encryption",slug:"/transactions-and-encryption/transactions",permalink:"/mongodb-sprout-workshop/docs/transactions-and-encryption/transactions",draft:!1,unlisted:!1,editUrl:"https://github.com/mongodb-developer/mongodb-sprout-workshop/blob/main/docs/06-transactions-and-encryption/1-transactions.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Transactions and Encryption",permalink:"/mongodb-sprout-workshop/docs/category/transactions-and-encryption"},next:{title:"CSFLE",permalink:"/mongodb-sprout-workshop/docs/transactions-and-encryption/csfle"}},c={},l=[{value:"Key Concepts",id:"key-concepts",level:2},{value:"Example Scenario: Implementing a Shopping Cart",id:"example-scenario-implementing-a-shopping-cart",level:2},{value:"Understanding the Code Structure",id:"understanding-the-code-structure",level:3},{value:"Running the Demo",id:"running-the-demo",level:3},{value:"Step 4: Observing Behaviors",id:"step-4-observing-behaviors",level:3},{value:"Explanation:",id:"explanation",level:3},{value:"Conclusion",id:"conclusion",level:2}];function d(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"transactions",children:"Transactions"}),"\n",(0,s.jsx)(e.p,{children:"MongoDB introduced multi-document ACID transactions in version 4.0, enhancing its capabilities to ensure data\nintegrity across multiple documents, collections, and databases. This feature brought MongoDB closer to traditional\nrelational databases, providing a robust mechanism for handling complex transactional data operations."}),"\n",(0,s.jsx)(e.h2,{id:"key-concepts",children:"Key Concepts"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"ACID Properties:"})," MongoDB transactions ensure Atomicity, Consistency, Isolation, and Durability across multiple documents.\nThis means that a group of operations either all succeed together or fail together without affecting the database's consistency."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Snapshot Isolation:"})," MongoDB uses snapshot isolation to maintain consistency. This means that all reads within a transaction\nwill see a consistent snapshot of the database, and modifications made by a transaction are invisible to others until the transaction commits."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Change Streams:"})," MongoDB allows applications to access real-time data changes without the complexity and risk of tailing the oplog.\nThis feature, introduced in MongoDB 3.6, enables applications to stream changes to documents in a database in real-time."]}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:["Always start the ",(0,s.jsx)(e.code,{children:"ChangeStreams"})," class in the transactions package first because it creates the product\ncollection with the required JSON Schema. See the related blog post."]}),"\n",(0,s.jsx)(e.h2,{id:"example-scenario-implementing-a-shopping-cart",children:"Example Scenario: Implementing a Shopping Cart"}),"\n",(0,s.jsxs)(e.p,{children:["Switch to ",(0,s.jsx)(e.code,{children:"session3"})," for this exercise:"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"git stash\ngit checkout session3-complete\n"})}),"\n",(0,s.jsx)(e.p,{children:"Let\u2019s consider a scenario where a shopping cart application needs to manage product inventory and customer\ncarts atomically to prevent selling more items than available in stock."}),"\n",(0,s.jsx)(e.h3,{id:"understanding-the-code-structure",children:"Understanding the Code Structure"}),"\n",(0,s.jsx)(e.p,{children:"The project contains two main classes:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"ChangeStreams.java"}),": Monitors data changes in MongoDB."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"Transactions.java"}),": Handles the transaction logic."]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"For this example, two collections are required because we are dealing with two different business entities:\nthe stock management and the shopping cart each client can create during shopping.\nThe lifecycles of each document in these collections are different."}),"\n",(0,s.jsxs)(e.p,{children:["A document in the product collection represents an item I\u2019m selling. This contains the current price of\nthe product and the current stock, created in a POJO to represent it ",(0,s.jsx)(e.a,{href:"https://github.com/mongodb-developer/mdb-java-workshop/blob/session3-complete/src/main/java/com/mongodb/quickstart/transactions/models/Product.java",children:"Product.java"}),"."]}),"\n",(0,s.jsx)(e.h3,{id:"running-the-demo",children:"Running the Demo"}),"\n",(0,s.jsx)(e.p,{children:"You'll need two terminals for this:"}),"\n",(0,s.jsxs)(e.p,{children:["Run the ",(0,s.jsx)(e.code,{children:"ChangeStreams"})," Class:"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:'mvn spring-boot:run -Dspring-boot.run.arguments="change-streams"\n'})}),"\n",(0,s.jsxs)(e.p,{children:["Run the ",(0,s.jsx)(e.code,{children:"Transactions"})," Class in a Separate Terminal:"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:'mvn spring-boot:run -Dspring-boot.run.arguments="transactions"\n'})}),"\n",(0,s.jsx)(e.h3,{id:"step-4-observing-behaviors",children:"Step 4: Observing Behaviors"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Without Transaction"}),": Attempt to update stock and add items to the cart separately. This can potentially\nlead to inconsistencies if one operation fails."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"With Transaction"}),": Perform both operations atomically. If the stock is insufficient, the transaction\nwill roll back, preventing any changes to the database and ensuring consistency."]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"Here is an example of performing operations within a transaction:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-java",children:"session.startTransaction(TransactionOptions.builder().writeConcern(WriteConcern.MAJORITY).build());\naliceWantsTwoExtraBeers(session);\nsleep();\nremovingBeerFromStock(session);\nsession.commitTransaction();\n"})}),"\n",(0,s.jsx)(e.h3,{id:"explanation",children:"Explanation:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"session.startTransaction(...)"}),": Begins a new transaction with majority write concern, ensuring that the operations are acknowledged by the majority of the nodes."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"aliceWantsTwoExtraBeers(session)"}),": Adds two extra beers to Alice's cart within the transaction."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"sleep()"}),": Pauses the execution momentarily, simulating a delay."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"removingBeerFromStock(session)"}),": Decreases the beer stock within the transaction."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"session.commitTransaction()"}),": Commits the transaction, making all changes permanent only if all operations succeed."]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,s.jsx)(e.p,{children:"MongoDB\u2019s support for multi-document transactions allows developers to handle complex data changes with ease,\nensuring data integrity and consistency across operations. This makes MongoDB suitable for applications\nrequiring robust transactional support, similar to traditional relational databases."})]})}function h(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}},8453:(n,e,t)=>{t.d(e,{R:()=>a,x:()=>r});var s=t(6540);const i={},o=s.createContext(i);function a(n){const e=s.useContext(o);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:a(n.components),s.createElement(o.Provider,{value:e},n.children)}}}]);
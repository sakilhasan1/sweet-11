import React from 'react';

const Blog = () => {
    return (
        <div className='ml-16'>
            <div>
                <h1 className='text-primary'>1. Difference between SQL and NoSQL</h1>
                <p className='text-success'>
                    <h3>...............SQL.................</h3>
                    <li>RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS)	</li>
                    <li>These databases have fixed or static or predefined schema	</li>
                    <li>These databases are not suited for hierarchical data storage.</li>
                    <li>Vertically Scalable	</li>
                    <li>Examples: MySQL, PostgreSQL, Oracle, MS-SQL Server, etc</li>
                </p>
                <p className='text-success'>
                    <h3>...............NoSQL.................</h3>
                    <li>Non-relational or distributed database system.</li>
                    <li>They have dynamic schema</li>
                    <li>These databases are best suited for hierarchical data storage.</li>
                    <li>Horizontally scalable</li>
                    <li>Examples: MongoDB, GraphQL, HBase, Neo4j, Cassandra, etc</li>
                </p>
            </div>

            <div>
                <h1 className='text-primary'>2. What is JWT, and how does it work?</h1>
                <p className='text-success'>JWT, or JSON Web Token, is an open standard used to share security information <br />
                    between two parties — a client and a server. Each JWT contains encoded JSON objects, <br />
                    including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.
                </p>
                <p className='text-success'>
                    A JWT is a mechanism to verify the owner of some JSON data. It's an encoded, URL-safe string that can contain an unlimited <br />
                    amount of data (unlike a cookie) and is cryptographically signed. When a server receives a JWT, it can guarantee the data it contains can be trusted because it's signed by the source.
                </p>
            </div>

            <div>
                <h1 className='text-primary'>3. What is the difference between javascript and NodeJS?</h1>
                <p className='text-success'>
                    JavaScript is a simple programming language that can be used with any <br />
                    browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language
                </p>
            </div>

            <div>
                <h1 className='text-primary'>4. How does NodeJS handle multiple requests at the same time?</h1>
                <p className='text-success'>
                    NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. <br />
                    NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.
                </p>
            </div>
        </div>
    );
};

export default Blog;
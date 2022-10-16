const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    userMaterials: [userMaterialsSchema]
  }

  type userMaterialsSchema {
    material: Material
    stock: Int
    safetyStock: Int
    anticipatedDemand: Int
  }

  type Supplier {
    _id: ID
    name: String
    email: String
    address: String
    phone: String
    user: User
    supplierMaterials: [supplierMaterialsSchema]
  }

  type supplierMaterialsSchema {
    material: Material
    cost: Float
    leadTime: Int
  }

  type Material {
    _id: ID!
    name: String!
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    suppliers: [Supplier]
    supplier(_id: ID!): Supplier
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addSupplier(name: String!, email: String!, address: String!, phone: String!): Supplier
    updateSupplier(_id: ID!, name: String! email: String! address: String! phone: String!): Supplier
    deleteSupplier(_id: ID!): Supplier
    updateUserMaterial(_id: ID!, name: String! stock:Int! safetyStock:Int! anticipatedDemand:Int!): User
    updateSupplierMaterial(_id: ID!, materialId: ID!, cost: Float!, leadTime: Int!): Supplier
  }
`;

module.exports = typeDefs;
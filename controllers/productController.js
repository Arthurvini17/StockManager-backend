const express = require('express');
const { PrismaClient } = require('@prisma/client');
const Prisma = new PrismaClient();

module.exports = {
    GetAllProducts: async (req, res) => {
        try {

            const product = await Prisma.product.findMany({})
            if (product.length === 0) {
                return res.status(404).json({ message: 'Não existe produtos' })
            }
            return res.status(200).json({ message: 'teste', product })
        } catch (error) {
            return res.status(500).json({ message: 'Erro no servidor', error })
        }
    },


}


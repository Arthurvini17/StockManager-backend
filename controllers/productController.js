const express = require('express');
const { PrismaClient } = require('@prisma/client');
const { search } = require('../routes/productRoutes');
const Prisma = new PrismaClient();

module.exports = {
    GetAllProducts: async (req, res) => {
        const { search } = req.query;
        try {

            const product = await Prisma.product.findMany({
                where: search
                    ? {
                        Product_name: {
                            contains: search,
                            mode: 'insensitive'
                        }
                    }
                    : {}
            });
            if (product.length === 0) {
                return res.status(404).json({ message: 'Não existe produtos' })
            }
            return res.status(200).json(product)
        } catch (error) {
            return res.status(500).json({ message: 'Erro no servidor', error })
        }
    },

    GetProduct: async (req, res) => {

        const { id } = req.params

        if (!id || isNaN(id)) {
            return res.status(404).json({ message: 'ID Invalido' })
        }
        try {
            const product = await Prisma.product.findUnique({
                where: { id: Number(id) }
            });

            if (!product) {
                return res.status(404).json({ product });
            }
            return res.status(200).json({ message: 'Produto encontrado:', product })
        } catch (error) {

        }
    },

    DeleteProduct: async (req, res) => {
        const { id } = req.params;

        if (!id || isNaN(id)) {
            return res.status(404).json({ message: 'ID invalido' });
        }

        try {
            const product = await Prisma.product.delete({
                where: { id: Number(id) }
            })

            return res.status(200).json({ message: 'Produto deletado com sucesso', product });
        } catch (error) {

            return res.status(404).json({ message: 'Error', error })

        }
    },

    CreateProducts: async (req, res) => {
        const { Product_name, description, price, quantity, category } = req.body;

        try {
            const product = await Prisma.product.create({
                data: { Product_name, description, price, category, quantity }
            });

            console.log('Recebido:', req.body)

            res.status(201).json({ message: 'Produto criado', product });
        } catch (error) {
            res.status(500).json({ message: 'error', error })
        }
    },


    EditProducts: async (req, res) => {

        const { Product_name, description, price, quantity, category } = req.body;
        const { id } = req.params;

        if (!id || isNaN(id)) {
            return res.status(404).json({ message: 'ID invalido' });
        }
        try {
            const product = await Prisma.product.update({
                where: { id: Number(id) },
                data: { Product_name, description, price, quantity, category }
            });

            return res.status(200).json({ message: 'Produto atualizado', product });

        } catch (error) {
            return res.status(500).json({ message: 'Erro', error })
        }
    },
}

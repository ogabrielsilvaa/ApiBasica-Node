const express = require("express");
const controller = require("../controller/userController");
const { authenticateToken } = require("../middlewares/authenticateToken");
const { authorizeRoles } = require("../middlewares/authorizeRoles");

const router = express.Router();

/**
 * @swagger
 * /api/v1/users:
 *  get:
 *    summary: Lista todos os usuários
 *    tags: [Usuários]
 *    security:
 *       - bearerAuth: []
 *    responses:
 *      200:
 *        description: Lista de usuários retornada com sucesso
 */
router.get("/", authenticateToken, authorizeRoles(["user", "admin"]), controller.list);

/**
 * @swagger
 * /api/v1/users/{id}:
 *  get:
 *    summary: Busca um usuário por ID
 *    tags: [Usuários]
 *    security:
 *       - bearerAuth: []
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: integer
 *        description: ID do usuário
 *    responses:
 *      200:
 *        description: Usuário encontrado
 *      404:
 *        description: Usuário não encontrado
 */
router.get("/:id", authenticateToken, authorizeRoles(["user", "admin"]), controller.getById);

/**
* @swagger
* /api/v1/users:
*   post:
*     summary: Cadastra um novo usuário
*     tags: [Usuários]
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             type: object
*             required:
*               - nome
*               - email
*               - senha
*               - nomeMae
*             properties:
*               nome:
*                 type: string
*                 example: João
*               email:
*                 type: string
*                 example: joao@email.com
*               senha:
*                 type: string
*                 example: 123
*               dataNascimento:
*                 type: string
*                 format: date
*                 example: 2036-03-18
*               rg:
*                 type: string
*                 example: 21312123112
*               cpf:
*                 type: string
*                 example: 21312123112
*               nomeMae:
*                 type: string
*                 example: nome da sua mae
*     responses:
*       201:
*         description: Usuário criado com sucesso
*       400:
*         description: Dados inválidos
*/
router.post("/", controller.create);

/**
* @swagger
* /api/v1/users/{id}:
*   put:
*     summary: Atualiza um usuário existente
*     tags: [Usuários]
*     security:
*        - bearerAuth: []
*     parameters:
*      - in: path
*        name: id
*        required: true
*        schema:
*         type: integer
*        description: ID do usuário
*     requestBody:
*      required: true
*      content:
*        application/json:
*          schema:
*            type: object
*            properties:
*               nome:
*                 type: string
*                 example: João
*               email:
*                 type: string
*                 example: joao@email.com
*               senha:
*                 type: string
*                 example: 123
*               dataNascimento:
*                 type: string
*                 format: date
*                 example: 2036-03-18
*               rg:
*                 type: string
*                 example: 21312123112
*               cpf:
*                 type: string
*                 example: 21312123112
*               nomeMae:
*                 type: string
*                 example: nome da sua mae
*     responses:
*       200:
*         description: Usuário atualizado com sucesso
*       401:
*         description: Não autorizado (Token ausente ou inválido)
*       403:
*         description: Proibido (Permissão insuficiente)
*       404:
*         description: Usuário não encontrado
*/
router.put("/:id", authenticateToken, authorizeRoles(["user", "admin"]), controller.update);

/**
* @swagger
* /api/v1/users/{id}:
*   delete:
*     summary: Remove um usuário
*     tags: [Usuários]
*     security:
*       - bearerAuth: []
*     parameters:
*       - in: path
*         name: id
*         required: true
*         schema:
*           type: integer
*         description: ID do usuário
*     responses:
*       200:
*         description: Usuário removido com sucesso
*       401:
*         description: Não autorizado (Token ausente ou inválido)
*       403:
*         description: Proibido (Permissão insuficiente)
*       404:
*         description: Usuário não encontrado
*/
router.delete("/:id", authenticateToken, authorizeRoles(["admin"]), controller.remove);

module.exports = router;

const pool = require('../models/db');

// GET: Lista todos os bugs
exports.getBugs = async (req, res) => {
    const result = await pool.query('SELECT * FROM bugs ORDER BY id DESC');
    res.json(result.rows);
};

// POST: Cria um novo bug
exports.createBug = async (req, res) => {
    const { titulo, descricao, status, prioridade } = req.body;
    const result = await pool.query(
        'INSERT INTO bugs (titulo, descricao, status, prioridade) VALUES ($1, $2, $3, $4) RETURNING *',
        [titulo, descricao, status, prioridade]
    );
    res.status(201).json(result.rows[0]);
};

// PUT: Atualiza um bug existente
exports.updateBug = async (req, res) => {
    const id = req.params.id;
    const { titulo, descricao, status, prioridade } = req.body;

    try {
        const result = await pool.query(
            'UPDATE bugs SET titulo=$1, descricao=$2, status=$3, prioridade=$4 WHERE id=$5 RETURNING *',
            [titulo, descricao, status, prioridade, id]
        );

        if (result.rowCount === 0) {
            return res.status(404).json({ erro: 'Bug não encontrado' });
        }

        res.json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ erro: 'Erro ao atualizar bug' });
    }
};
// DELETE: Exclui um bug
exports.deleteBug = async (req, res) => {
    const id = req.params.id;

    try {
        const result = await pool.query('DELETE FROM bugs WHERE id = $1', [id]);

        if (result.rowCount === 0) {
            return res.status(404).json({ erro: 'Bug não encontrado' });
        }

        res.status(204).send();
    } catch (err) {
        res.status(500).json({ erro: 'Erro ao excluir bug' });
    }
};

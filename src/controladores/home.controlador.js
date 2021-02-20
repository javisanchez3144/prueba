'use strict';

module.exports =  {
  index: ( req, resp ) => {
    resp.status(402).json({
      ok: false,
      mensake: 'Esta petición no existe. Verifique por favor.'
    })
  }
}; 

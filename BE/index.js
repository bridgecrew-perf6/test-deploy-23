import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import fs from 'fs';
import https from 'https';
import dbconnect from './data/dbconnect.js';
import router from './routes/route.js';

// app.use("/",TourRoutes);
const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', router);

router.use((request, response, next) => {
  console.log(`${ request.method } ${ request.url }`);
  next();
});

router.route('/products').get((request, response) => {
  dbconnect.GetDatas().then((result) => {
    response.send(result[0]);
  });
});
router.route('/products/:id').get((request, response) => {
  dbconnect.GetData(request.params.id).then((result) => {
    response.send(result[0]);
  });
});
router.route('/products').post((request, response) => {
  let Category = { ...request.body };

  dbconnect.addTour(Category).then((result) => {
    response.status(201).send(result);
  });
});
router.route('/products/:id').put((request, response) => {
  let eventid = request.params.id;
  let data = request.body[0];

  dbconnect
    .updateTour(eventid, data)
    .then((result) => {
      response.status(202).send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});
router.route('/products/:id').delete((req, res) => {
  let eventid = req.params.id;
  dbconnect.deleteTour(eventid).then((result) => {
    res.status(204).send(result);
  });
});
//Route loai tour
router.route('/loaitour').get((request, response) => {
  dbconnect.Getloaitour().then((result) => {
    response.send(result[0]);
  });
});
router.route('/loaitour').post((request, response) => {
  let listve = { ...request.body };

  dbconnect
    .addloaitour(listve)
    .then((result) => {
      response.status(201).send(result);
    })
    .catch((err) => {
      console.log('Add failed', err);
    });
});
router.route('/loaitour/:id').delete((req, res) => {
  let eventid = req.params.id;
  dbconnect
    .deleteLoaiTour(eventid)
    .then((result) => {
      res.status(208).send(result);
    })
    .catch((error) => {
      console.log('Delete Failed', error);
    });
});
//Route đơn đặt vé
router.route('/dondatve').get((request, response) => {
  dbconnect
    .GetDonDatVe()
    .then((result) => {
      response.send(result);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});
router.route('/dondatve').post((request, response) => {
  let listve = { ...request.body };

  dbconnect
    .addDonDatVe(listve)
    .then((result) => {
      response.status(206).send(result);
    })
    .catch((err) => {
      console.log(err);
      response.status(500).send(err);
    });
});
router
  .route('/dondatve/:id')
  .delete((req, res) => {
    let eventid = req.params.id;
    dbconnect
      .declineDonDatVe(eventid)
      .then((result) => {
        res.status(204).send(result);
      })
      .catch((error) => {
        console.log('Delete Failed', error);
        res.status(500).send(error);
      });
  })
  .put(async (req, res) => {
    try {
      const id = req.params.id;
      const resutl = await dbconnect.acceptOrder(
        id,
        req.body.maKH,
        req.body.danhSachCacVe,
      );
      res.status(200).send(resutl);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  });

// Route vé
router.route('/veproducts').get((req, response) => {
  dbconnect
    .getAllTickets()
    .then((result) => {
      response.send(result);
    })
    .catch((err) => {
      response.status(500).json({
        message: err.message,
      });
    });
});

router.route('/veproducts/:id').get((request, response) => {
  dbconnect
    .getTicketByMaVe(request.params.id)
    .then((result) => {
      response.send(result);
    })
    .catch((err) => {
      response.status(500).json({
        message: err.message,
      });
    });
});

router.route('/veproducts').post((request, response) => {
  const listve = { ...request.body };
  dbconnect
    .addve(listve)
    .then((result) => {
      response.status(201).json({
        result,
        message: 'Tạo vé thành công',
      });
    })
    .catch((err) => {
      console.log(err);
      response.status(500).send(err);
    });
});

router.route('/veproducts/:id').put((request, response) => {
  const ticketId = request.params.id;
  const data = request.body;
  dbconnect
    .updateVe(ticketId, data)
    .then((result) => {
      response.status(200).send(result);
    })
    .catch((err) => {
      console.log(err);
      response.status(500).send(err);
    });
});

router.route('/veproducts/:id').delete((req, res) => {
  const eventId = req.params.id;
  dbconnect
    .deleteVe(eventId)
    .then((result) => {
      res.status(204).send(result);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send(error);
    });
});

// Tour Type Routes
router
  .route('/tourTypes/:id')
  .delete(async (req, res) => {
    try {
      const { id } = req.params.id;
      const result = dbconnect.deleteTourType(id);
      return res.status(204).send(result);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  })
  .put(async (req, res) => {
    try {
      const { id } = req.params;
      const result = dbconnect.updateTourType(id, req.body);
      res.status(200).send(result);
    } catch (error) {
      res.status(500).send(error);
    }
  });

router
  .route('/tourTypes')
  .get(async (req, res) => {
    try {
      const result = await dbconnect.getAllTourTypes();
      res.status(200).send(result);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  })
  .post(async (req, res) => {
    try {
      const result = await dbconnect.addTourType(req.body);
      return res.status(201).send(result);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  });

// Ticket Type Routes
router
  .route('/ticketTypes/:id')
  .delete(async (req, res) => {
    const { id } = req.params;
    try {
      const data = await dbconnect.deleteTicketType(id);
      return res.status(204).send(data);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  })
  .put(async (req, res) => {
    const { id } = req.params;
    try {
      const data = await dbconnect.updateTicketType(id, req.body);
      return res.status(204).send(data);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  });

router
  .route('/ticketTypes')
  .get(async (req, res) => {
    try {
      const result = await dbconnect.getAllTicketTypes();
      res.status(200).send(result);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  })
  .post(async (req, res) => {
    try {
      const result = await dbconnect.createTicketType(req.body);
      res.status(201).send(result);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  });

// Tours

router.route('/tours').get(async (req, res) => {
  try {
    const result = await dbconnect.getAllTours();
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Find Ticket By DonDatTour

router.get('/getTicktByDDT', async (req, res) => {
  try {
    const { maTour, maLoaiVe, ngayDat, soLuong } = req.query;
    const result = await dbconnect.findTickerByDonDatTour(
      maTour,
      maLoaiVe,
      ngayDat,
      soLuong,
    );
    res.status(200).send(result);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.get('/thongKe', async (req, res) => {
  try {
    const result = await dbconnect.layThongTinThongKe();
    return res.status(200).send(result);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.post('/datTour', async (req, res) => {
  try {
    const result = await dbconnect.taoDonDatTour(req.body);
    return res.status(201).send(result);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

const sslServer = https.createServer(
  {
    key: fs.readFileSync('cetificate/key.pem'),
    cert: fs.readFileSync('cetificate/cert.pem'),
  },
  app,
);

sslServer.listen(8000, () => console.log('Secure server on port 8000'));

// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import { sep } from 'path'; //_splitter_
import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import { MongoPersistance } from '../../utils/ndefault-mongodb/Mongodb/MongoPersistance'; //_splitter_
//append_imports_end
export class CRUD {
  private sdService = new SDBaseService();
  private tracerService = new TracerService();
  private app;
  private serviceBasePath: string;
  private generatedMiddlewares: Object;
  private serviceName: string;

  private globalTimers: any;
  private constructor(
    app,
    generatedeMiddlewares,
    routeCall,
    middlewareCall,
    globalTimers
  ) {
    this.serviceName = 'CRUD';
    this.app = app;
    this.serviceBasePath = this.app.settings.base;
    this.generatedMiddlewares = generatedeMiddlewares;
    this.globalTimers = globalTimers;
  }

  static getInstance(
    app?,
    generatedeMiddlewares?,
    routeCall?,
    middlewareCall?,
    globalTimers?
  ) {
    if (!instance) {
      instance = new CRUD(
        app,
        generatedeMiddlewares,
        routeCall,
        middlewareCall,
        globalTimers
      );
    }
    instance.mountCalls(routeCall, middlewareCall);
    return instance;
  }

  private mountCalls(routeCall, middlewareCall) {
    if (routeCall) {
      this.mountAllPaths();
      this.mountAllListeners();
    }
    if (middlewareCall) {
      this.generatedMiddlewares[this.serviceName] = {};
      this.mountAllMiddlewares();
      this.mountTimers();
    }
  }

  async mountAllListeners() {
    //append_listeners
  }

  async mountTimers() {
    //appendnew_flow_CRUD_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: CRUD');
    //appendnew_flow_CRUD_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: CRUD');

    this.app['post'](
      `${this.serviceBasePath}/add`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),
      this.sdService.multipartParser({
        type: 'path',
        path: 'file'.replace(/\\|\//g, sep),
        options: [{ name: 'file', maxCount: 1 }],
      }),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_c3oPHNTsNwNzwlC9(bh, parentSpanInst);
          //appendnew_next_sd_sq4jCM6DFnXa1XL2
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_sq4jCM6DFnXa1XL2');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/get-all`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_DE5wG9vPk4kxwd41(bh, parentSpanInst);
          //appendnew_next_sd_936YZ4d2LMd1jVFy
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_936YZ4d2LMd1jVFy');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/update`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_ZwG5RJvl6xLw0UNv(bh, parentSpanInst);
          //appendnew_next_sd_6snOlLjS07pHt29W
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_6snOlLjS07pHt29W');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['delete'](
      `${this.serviceBasePath}/delete`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_pt839PmiPePRaO5K(bh, parentSpanInst);
          //appendnew_next_sd_JWgLXOCGu7RbY5rw
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_JWgLXOCGu7RbY5rw');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/upload`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),
      this.sdService.multipartParser({
        type: 'path',
        path: 'file'.replace(/\\|\//g, sep),
        options: [{ name: 'file', maxCount: 1 }],
      }),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_f23pJW84iVEzp5rg(bh, parentSpanInst);
          //appendnew_next_sd_8qHIEc1FMNDlyvBd
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_8qHIEc1FMNDlyvBd');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/get-file/:filename`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_nmPj7cYM80DEAyr0(bh, parentSpanInst);
          //appendnew_next_sd_ayb3QllRaAx9wFAJ
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_ayb3QllRaAx9wFAJ');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_CRUD_HttpIn
  }
  //   service flows_CRUD

  //appendnew_flow_CRUD_start

  async sd_c3oPHNTsNwNzwlC9(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_c3oPHNTsNwNzwlC9',
      parentSpanInst
    );
    try {
      // for adding image
      // bh.file = bh.input.files.file[0];

      // for adding items
      bh.input.body['_id'] = new Date().getTime();
      bh.body = bh.input.body;
      // bh.body['filename'] =  null
      bh.collection = 'items';
      bh.status = 201;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_8eirLNq6K1nZjeFx(bh, parentSpanInst);
      //appendnew_next_sd_c3oPHNTsNwNzwlC9
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_c3oPHNTsNwNzwlC9',
        spanInst,
        'sd_c3oPHNTsNwNzwlC9'
      );
    }
  }

  async sd_8eirLNq6K1nZjeFx(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_8eirLNq6K1nZjeFx',
      parentSpanInst
    );
    try {
      bh.result = await MongoPersistance.getInstance().insertOne(
        'sd_tagfWngVlHVDefGE',
        bh.collection,
        bh.body,
        bh.options,
        bh.options
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_JO0A41lh1jnUfNfm(bh, parentSpanInst);
      //appendnew_next_sd_8eirLNq6K1nZjeFx
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_8eirLNq6K1nZjeFx',
        spanInst,
        'sd_8eirLNq6K1nZjeFx'
      );
    }
  }

  async sd_JO0A41lh1jnUfNfm(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.status).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_JO0A41lh1jnUfNfm');
    }
  }

  async sd_DE5wG9vPk4kxwd41(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_DE5wG9vPk4kxwd41',
      parentSpanInst
    );
    try {
      bh.search = {
        collection: 'items',
      };
      bh.status = 200;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_0W4Yc4OHB54Sq4eg(bh, parentSpanInst);
      //appendnew_next_sd_DE5wG9vPk4kxwd41
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_DE5wG9vPk4kxwd41',
        spanInst,
        'sd_DE5wG9vPk4kxwd41'
      );
    }
  }

  async sd_0W4Yc4OHB54Sq4eg(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_0W4Yc4OHB54Sq4eg',
      parentSpanInst
    );
    try {
      bh.result = await MongoPersistance.getInstance().find(
        'sd_tagfWngVlHVDefGE',
        bh.search.collection,
        bh.query,
        bh.options,
        bh.options
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_PfPf6W1DmK2lzAQu(bh, parentSpanInst);
      //appendnew_next_sd_0W4Yc4OHB54Sq4eg
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_0W4Yc4OHB54Sq4eg',
        spanInst,
        'sd_0W4Yc4OHB54Sq4eg'
      );
    }
  }

  async sd_PfPf6W1DmK2lzAQu(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.status).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_PfPf6W1DmK2lzAQu');
    }
  }

  async sd_ZwG5RJvl6xLw0UNv(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ZwG5RJvl6xLw0UNv',
      parentSpanInst
    );
    try {
      bh.collection = 'items';
      bh.filter = { title: bh.input.body['title'] };
      bh.status = 200;
      bh.body = { $set: bh.input.body };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_0GppBIbjWxhMkT3o(bh, parentSpanInst);
      //appendnew_next_sd_ZwG5RJvl6xLw0UNv
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ZwG5RJvl6xLw0UNv',
        spanInst,
        'sd_ZwG5RJvl6xLw0UNv'
      );
    }
  }

  async sd_0GppBIbjWxhMkT3o(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_0GppBIbjWxhMkT3o',
      parentSpanInst
    );
    try {
      bh.result = await MongoPersistance.getInstance().updateOne(
        'sd_tagfWngVlHVDefGE',
        bh.collection,
        bh.filter,
        bh.body,
        bh.options,
        bh.options
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_lZuRKaban6Ff03oC(bh, parentSpanInst);
      //appendnew_next_sd_0GppBIbjWxhMkT3o
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_0GppBIbjWxhMkT3o',
        spanInst,
        'sd_0GppBIbjWxhMkT3o'
      );
    }
  }

  async sd_lZuRKaban6Ff03oC(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.status).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_lZuRKaban6Ff03oC');
    }
  }

  async sd_pt839PmiPePRaO5K(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_pt839PmiPePRaO5K',
      parentSpanInst
    );
    try {
      bh.collection = 'items';
      bh.filter = { title: bh.input.body['title'] };
      bh.body = bh.input.body;
      bh.status = 200;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_nPZQ1g4MOD2J17rn(bh, parentSpanInst);
      //appendnew_next_sd_pt839PmiPePRaO5K
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_pt839PmiPePRaO5K',
        spanInst,
        'sd_pt839PmiPePRaO5K'
      );
    }
  }

  async sd_nPZQ1g4MOD2J17rn(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_nPZQ1g4MOD2J17rn',
      parentSpanInst
    );
    try {
      bh.result = await MongoPersistance.getInstance().deleteOne(
        'sd_tagfWngVlHVDefGE',
        bh.collection,
        bh.filter,
        bh.options,
        bh.options
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_zG8zYg7iEq0cGm8e(bh, parentSpanInst);
      //appendnew_next_sd_nPZQ1g4MOD2J17rn
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_nPZQ1g4MOD2J17rn',
        spanInst,
        'sd_nPZQ1g4MOD2J17rn'
      );
    }
  }

  async sd_zG8zYg7iEq0cGm8e(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.status).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_zG8zYg7iEq0cGm8e');
    }
  }

  async sd_f23pJW84iVEzp5rg(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_f23pJW84iVEzp5rg',
      parentSpanInst
    );
    try {
      bh.file = bh.input.files.file[0];
      bh.status = 200;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_FJS3XUKWjOE6ajQt(bh, parentSpanInst);
      //appendnew_next_sd_f23pJW84iVEzp5rg
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_f23pJW84iVEzp5rg',
        spanInst,
        'sd_f23pJW84iVEzp5rg'
      );
    }
  }

  async sd_FJS3XUKWjOE6ajQt(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_FJS3XUKWjOE6ajQt',
      parentSpanInst
    );
    try {
      bh.result = await MongoPersistance.getInstance().uploadFile(
        'sd_tagfWngVlHVDefGE',
        'files',
        bh.file.path,
        bh.file.filename,
        bh.options,
        bh.options
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_lie0O1vNmQzMHYNY(bh, parentSpanInst);
      //appendnew_next_sd_FJS3XUKWjOE6ajQt
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_FJS3XUKWjOE6ajQt',
        spanInst,
        'sd_FJS3XUKWjOE6ajQt'
      );
    }
  }

  async sd_lie0O1vNmQzMHYNY(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.status).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_lie0O1vNmQzMHYNY');
    }
  }

  async sd_nmPj7cYM80DEAyr0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_nmPj7cYM80DEAyr0',
      parentSpanInst
    );
    try {
      bh.search = {
        collection: 'files.files',
      };
      bh.status = 200;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_HE9h7FMkf9d01dgU(bh, parentSpanInst);
      //appendnew_next_sd_nmPj7cYM80DEAyr0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_nmPj7cYM80DEAyr0',
        spanInst,
        'sd_nmPj7cYM80DEAyr0'
      );
    }
  }

  async sd_HE9h7FMkf9d01dgU(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_HE9h7FMkf9d01dgU',
      parentSpanInst
    );
    try {
      bh.result = await MongoPersistance.getInstance().find(
        'sd_tagfWngVlHVDefGE',
        bh.search.collection,
        bh.query,
        bh.options,
        bh.options
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_9BXsMDBvaBC422NS(bh, parentSpanInst);
      //appendnew_next_sd_HE9h7FMkf9d01dgU
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_HE9h7FMkf9d01dgU',
        spanInst,
        'sd_HE9h7FMkf9d01dgU'
      );
    }
  }

  async sd_9BXsMDBvaBC422NS(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_9BXsMDBvaBC422NS',
      parentSpanInst
    );
    try {
      console.log('result', bh.result);

      bh.result.forEach((item) => {
        if (item.filename == bh.input.params.filename) {
          bh.filter = { _id: item._id };
          console.log('Matching Item ', item);
        }
      });

      console.log('filter: ', bh.filter);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_jC0D7gfyY9QaFLGO(bh, parentSpanInst);
      //appendnew_next_sd_9BXsMDBvaBC422NS
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_9BXsMDBvaBC422NS',
        spanInst,
        'sd_9BXsMDBvaBC422NS'
      );
    }
  }

  async sd_jC0D7gfyY9QaFLGO(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_jC0D7gfyY9QaFLGO',
      parentSpanInst
    );
    try {
      bh.result = await MongoPersistance.getInstance().downloadFile(
        'sd_tagfWngVlHVDefGE',
        'files',
        bh.filter,
        bh
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_qBNgO6NeuBblX3q3(bh, parentSpanInst);
      //appendnew_next_sd_jC0D7gfyY9QaFLGO
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_jC0D7gfyY9QaFLGO',
        spanInst,
        'sd_jC0D7gfyY9QaFLGO'
      );
    }
  }

  async sd_qBNgO6NeuBblX3q3(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_qBNgO6NeuBblX3q3',
      parentSpanInst
    );
    try {
      console.log('results==>', bh.result);
      bh.file = bh.result;
      console.log('FIle data', bh.file);

      this.tracerService.sendData(spanInst, bh);
      await this.sd_8ZaciB0mMIVmUVEt(bh, parentSpanInst);
      //appendnew_next_sd_qBNgO6NeuBblX3q3
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_qBNgO6NeuBblX3q3',
        spanInst,
        'sd_qBNgO6NeuBblX3q3'
      );
    }
  }

  async sd_8ZaciB0mMIVmUVEt(bh, parentSpanInst) {
    try {
      bh.web.res.set({ 'Content-type': 'image/jpeg' });

      bh.file.downloadStream.pipe(bh.web.res);
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_8ZaciB0mMIVmUVEt');
    }
  }

  //appendnew_node

  // error_handler_slot
  private async errorHandler(
    bh,
    e,
    src,
    parentSpanInst?,
    functionName?
  ): Promise<any> {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    bh.errorFunName = functionName;
    this.tracerService.sendData(parentSpanInst, bh, true);
    if (bh.web.next) {
      bh.web.next(e);
    } else {
      throw e;
    }
  }
  //appendnew_flow_CRUD_Catch
}

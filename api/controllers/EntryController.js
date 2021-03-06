/**
 * EntryController
 *
 * @description :: Server-side logic for managing Entries
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

  /**
   * `EntryController.index()`
   */
  index: function (req, res) {
    Entry.find().exec(function(err, entries) {
      res.render('entry/index',{'entries':entries});
      return;
    });
  },

  /**
   * `EntryController.create()`
   */
  create: function (req, res) {
    if(req.method==='POST' && req.param('Entry',null)!==null) {
      Entry.create(req.param('Entry')).exec(function(err, model) {
        if(err) {
          res.send('ERROR: Entry could not be created!');
        }
        else {
          res.redirect('entry/show/'+model.id);
        }
      });
    }
    else {
      res.render('entry/create');
    }
  },

  /**
   * `EntryController.show()`
   */
  show: function (req, res) {
    var id=req.param('id',null);
    Entry.findOne(id).exec(function(err, model){
      res.render('entry/show',{'model':model});
    });
  },

  /**
   * `EntryController.update()`
   */
  update: function (req, res) {
    var id = req.param("id",null);

    Entry.findOne(id).exec(function(err, model){
      if(req.method==='POST' && req.param('Entry',null)!==null) {
        var par = req.param('Entry',null);
        model.title = par.title;
        model.content = par.content;
        model.date = par.date;
        model.save(function(err){
          if(err) {
            res.send('Entry could not be modified!');
          }
          else {
            res.redirect('entry/show/'+model.id);
          }
        });
      }
      else {
        res.render('entry/update',{'model':model});
      }
    });
  },

  /**
   * `EntryController.delete()`
   */
  delete: function (req, res) {
    var id = req.param("id",null);

    Entry.findOne(id).exec(function(err, entry){
      entry.destroy(function(err){
        res.redirect('entry/index');
      });
    });
  }
};


'use strict';

var mongoose = require('mongoose'),
	SchemaDefinition = require('./abstract.definition');

class Datasource extends SchemaDefinition {
	
	constructor () {
		super();
		this.schema = new mongoose.Schema({
			url: {
				type: String,
				trim: true,
				required: true
			},
			type: {
				type: String,
				required: true
			}
		});
	}
}

module.exports = Datasource;

import mongoose, { HydratedDocument, Query } from 'mongoose';

export abstract class MongoCrudService<MODEL_TYPE> {
  protected createdAtField = 'createdAt';
  protected defaultDirection: ApiListQuery['direction'] = 'desc';
  protected defaultLimit: ApiListQuery['limit'] = 10;
  protected defaultSkip: ApiListQuery['skip'] = 0;
  protected defaultSort: ApiListQuery['sort'] = 'updatedAt';
  protected model: mongoose.Model<MODEL_TYPE>;
  protected updatedAtField = 'updatedAt';

  async create(partialData: MODEL_TYPE): Promise<MODEL_TYPE> {
    const overData = {};
    if (this.createdAtField) {
      overData[this.createdAtField] = new Date();
    }
    if (this.updatedAtField) {
      overData[this.updatedAtField] = new Date();
    }
    const model = new this.model({
      ...partialData,
      ...overData,
    });
    await model.save();
    return model;
  }

  async delete(id: string): Promise<void> {
    await this.model
      .deleteOne()
      .where('_id', id);
  }

  async get(id: string): Promise<MODEL_TYPE> {
    return this.model
      .findOne()
      .where('_id', id);
  }

  async update(partialData: MODEL_TYPE, id: string): Promise<MODEL_TYPE> {
    const overData = {};
    if (this.updatedAtField) {
      overData[this.updatedAtField] = new Date();
    }
    await this.model.updateOne({ '_id': id }, {
      ...partialData,
      ...overData,
    });
    return this.get(id);
  }
}

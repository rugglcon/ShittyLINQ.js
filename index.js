const Aggregate = require('./src/Aggregate');
const All = require('./src/All');
const Any = require('./src/Any');
const Average = require('./src/Average');
const Concat = require('./src/Concat');
const Contains = require('./src/Contains');
const Count = require('./src/Count');
const ElementAt = require('./src/ElementAt');
const Empty = require('./src/Empty');
const First = require('./src/First');
const FirstOrDefault = require('./src/FirstOrDefault');
const GroupJoin = require('./src/GroupJoin');
const Last = require('./src/Last');
const Min = require('./src/Min');
const Max = require('./src/Max');
const Prepend = require('./src/Prepend');
const Range = require('./src/Range');
const Repeat = require('./src/Repeat');
const Reverse = require('./src/Reverse');
const Select = require('./src/Select');
const Single = require('./src/Single');
const SkipWhile = require('./src/SkipWhile');
const Sum = require('./src/Sum');
const Take = require('./src/Take');
const TakeWhile = require('./src/TakeWhile');
const ToDictionary = require('./src/ToDictionary');
const Union = require('./src/Union');
const Where = require('./src/Where');
const TakeLast = require('./src/TakeLast');

const bindAll = function() {
  Array.prototype.Aggregate = Aggregate;
  Array.prototype.All = All;
  Array.prototype.Any = Any;
  Array.prototype.Average = Average;
  Array.prototype.Concat = Concat;
  Array.prototype.Contains = Contains;
  Array.prototype.Count = Count;
  Array.prototype.ElementAt = ElementAt;
  Array.Empty = Empty;
  Array.prototype.First = First;
  Array.prototype.FirstOrDefault = FirstOrDefault;
  Array.prototype.GroupJoin = GroupJoin;
  Array.prototype.Last = Last;
  Array.prototype.Min = Min;
  Array.prototype.Max = Max;
  Array.prototype.Prepend = Prepend;
  Array.Range = Range;
  Array.Repeat = Repeat;
  Array.prototype.Reverse = Reverse;
  Array.prototype.Select = Select;
  Array.prototype.Single = Single;
  Array.prototype.SkipWhile = SkipWhile;
  Array.prototype.Sum = Sum;
  Array.prototype.Take = Take;
  Array.prototype.TakeWhile = TakeWhile;
  Array.prototype.ToDictionary = ToDictionary;
  Array.prototype.Union = Union;
  Array.prototype.Where = Where;
  Array.prototype.TakeLast = TakeLast;
};

module.exports = bindAll;
